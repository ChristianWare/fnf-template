import { db } from "@/lib/db";
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
          <h1 className={styles.heading}>Blog Posts</h1>
          <Button href='/admin/blog/new' btnType='black' text='New Post +' />
        </div>
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <div>
                <div>{p.title}</div>
                <div>
                  {p.published ? "Published" : "Draft"} •{" "}
                  {(p.publishedAt ?? p.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  href={`/blog/${p.slug}`}
                  btnType='blackOutline'
                  text='View'
                />
                <Button
                  href={`/admin/blog/${p.slug}/edit`}
                  btnType='lime'
                  text='edit'
                />
              </div>
            </li>
          ))}
        </ul>
      </LayoutWrapper>
    </section>
  );
}
