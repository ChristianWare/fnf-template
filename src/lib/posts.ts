/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/lib/db";
import { slugify } from "@/lib/slugify";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";
import sanitizeHtml from "sanitize-html";

export async function ensureUniqueSlug(title: string) {
  const base = slugify(title) || "post";
  let slug = base;
  let i = 1;
  while (true) {
    const exists = await db.post.findUnique({ where: { slug } });
    if (!exists) return slug;
    slug = `${base}-${i++}`;
  }
}

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    ...sanitizeHtml.defaults.allowedTags,
    "img",
    "h1",
    "h2",
    "h3",
    "h4",
    "pre",
    "code",
    "u",
  ],
  allowedAttributes: {
    a: ["href", "name", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
    "*": ["class"],
  },
  // prevent inline JS
  allowedSchemes: ["http", "https", "mailto", "tel"],
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", {
      rel: "nofollow noopener noreferrer",
      target: "_blank",
    }),
  },
};

export async function createPostAction(formData: FormData) {
  const session = await auth();
  const role = (session?.user as any)?.role;
  if (!session || role !== "ADMIN") throw new Error("Unauthorized");

  const title = (formData.get("title") as string)?.trim();
  const excerpt = (formData.get("excerpt") as string)?.trim() || null;
  const contentRaw = (formData.get("content") as string) || "";
  const publishNow = formData.get("publish") === "on";

  if (!title) throw new Error("Title is required");
  if (!contentRaw) throw new Error("Content is required");

  // sanitize before persisting
  const content = sanitizeHtml(contentRaw, SANITIZE_OPTIONS);
  const slug = await ensureUniqueSlug(title);

  const post = await db.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      published: publishNow,
      publishedAt: publishNow ? new Date() : null,
      authorId: (session.user as any).userId,
    },
    select: { slug: true, published: true },
  });

  revalidatePath("/blog");
  if (post.published) revalidatePath(`/blog/${post.slug}`);

  return { slug: post.slug, published: post.published };
}
