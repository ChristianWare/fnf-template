// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen grid place-items-center p-8 text-center'>
      <div>
        <h1 className='text-4xl font-bold'>404 — Page not found</h1>
        <p className='mt-2 text-muted-foreground'>
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className='mt-6'>
          <Link
            href='/'
            className='inline-block rounded px-4 py-2 border hover:bg-black hover:text-white transition'
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

// (optional) give it a nice <title>
// export const metadata = { title: "404 — Page not found" };
