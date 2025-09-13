import { db } from "@/lib/db";
// import Link from "next/link";
import styles from "./AdminBlogList.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";

export const runtime = "nodejs";

export default async function AdminBlogList() {
  const posts = await db.post.findMany({
    orderBy: [{ createdAt: "desc" }],
    select: {
      title: true,
      slug: true,
      published: true,
      createdAt: true,
      publishedAt: true,
    },
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className='flex items-center justify-between mb-6'>
          <h1 className='text-2xl font-bold'>Blog Posts</h1>
          {/* <Link
            href='/admin/blog/new'
            className='rounded-md bg-black px-4 py-2 text-white'
          >
            New Post
          </Link> */}
          <Button href='/admin/blog/new' btnType='black' text='New Post +' />
        </div>
        <ul className='divide-y'>
          {posts.map((p) => (
            <li key={p.slug} className='py-3 flex items-center justify-between'>
              <div>
                <div className='font-medium'>{p.title}</div>
                <div className='text-xs text-neutral-500'>
                  {p.published ? "Published" : "Draft"} •{" "}
                  {(p.publishedAt ?? p.createdAt).toLocaleDateString()}
                </div>
              </div>
              {/* <Link
                href={`/blog/${p.slug}`}
                className='text-sm underline underline-offset-4'
              >
                View
              </Link> */}
              <Button
                href={`/blog/${p.slug}`}
                btnType='blackOutline'
                text='View'
              />
            </li>
          ))}
        </ul>
      </LayoutWrapper>
    </section>
  );
}
