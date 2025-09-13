import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import styles from "./BlogPostPage.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

type Props = { params: { slug: string } };

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await db.post.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return slugs.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await db.post.findUnique({
    where: { slug: params.slug },
    select: {
      title: true,
      content: true,
      published: true,
      publishedAt: true,
      createdAt: true,
      author: { select: { name: true } },
    },
  });

  if (!post || !post.published) notFound();

  // Double-sanitize at render as defense-in-depth (cheap on server)
  const safe = sanitizeHtml(post.content, {
    allowedTags: false,
    allowedAttributes: false,
  });

  return (
    <main className={styles.container}>
      <LayoutWrapper>
        <h1 className='mb-2'>{post.title}</h1>
        <div className='text-sm text-neutral-500 mb-6'>
          {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString()}
          {post.author?.name ? ` • ${post.author.name}` : ""}
        </div>
        <div dangerouslySetInnerHTML={{ __html: safe }} />
      </LayoutWrapper>
    </main>
  );
}
