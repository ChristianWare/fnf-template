import BlogPageIntro from "@/components/BlogPage/BlogPageIntro/BlogPageIntro";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";
import { db } from "@/lib/db";
import Link from "next/link";

export const revalidate = 60;



export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    select: { title: true, slug: true, excerpt: true, publishedAt: true },
  });


  return (
    <main>
      <Nav />
      <BlogPageIntro />
      <BlogSection />
      <div className='mx-auto max-w-3xl p-6'>
        <h1 className='text-3xl font-bold mb-6'>Blog</h1>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul className='space-y-6'>
            {posts.map((p) => (
              <li key={p.slug} className='border-b pb-4'>
                <Link
                  href={`/blog/${p.slug}`}
                  className='text-xl font-semibold hover:underline'
                >
                  {p.title}
                </Link>
                {p.publishedAt && (
                  <div className='text-xs text-neutral-500 mt-1'>
                    {new Date(p.publishedAt).toLocaleDateString()}
                  </div>
                )}
                {p.excerpt && (
                  <p className='mt-2 text-neutral-700'>{p.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <FinalCTAMain />
    </main>
  );
}
