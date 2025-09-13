/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/admin/blog/[slug]/edit/page.tsx
import styles from "./EditPostPage.module.css";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { auth } from "../../../../../../../auth";
import AdminEditPostForm from "@/components/admin/AdminEditPostForm/AdminEditPostForm";
import { deletePostAction, updatePostAction } from "@/lib/posts";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

export const runtime = "nodejs";

type Props = { params: { slug: string } };

export default async function EditPostPage({ params }: Props) {
  const session = await auth();
  if (!session || (session.user as any)?.role !== "ADMIN") {
    // middleware should block already, but double-check on server
    notFound();
  }

  const post = await db.post.findUnique({
    where: { slug: params.slug },
    select: {
      title: true,
      slug: true,
      excerpt: true,
      content: true,
      published: true,
    },
  });
  if (!post) notFound();

  // Bind slug into the server actions
  const update = updatePostAction.bind(null, post.slug);
  const remove = deletePostAction.bind(null, post.slug);

  return (
    <main>
      <div className={styles.container}>
        <LayoutWrapper>
          <AdminEditPostForm
            initialTitle={post.title}
            initialSlug={post.slug}
            initialExcerpt={post.excerpt ?? ""}
            initialHTML={post.content}
            initialPublished={post.published}
            updateAction={update}
            deleteAction={remove}
          />
        </LayoutWrapper>
      </div>
    </main>
  );
}
