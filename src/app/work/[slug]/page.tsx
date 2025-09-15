import type { Metadata } from "next";
import { projects } from "@/lib/data";
import WorkDetailsClient from "./components/WorkDetailsClient/WorkDetailsClient";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pjct = projects.find((p) => p.slug === slug);
  return { title: pjct ? pjct.title : "Project Not Found" };
}

export default async function WorkDetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params; // ← await it
  const pjct = projects.find((p) => p.slug === slug);

  if (!pjct) {
    return (
      <main>
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <div>
      <WorkDetailsClient />
    </div>
  );
}
