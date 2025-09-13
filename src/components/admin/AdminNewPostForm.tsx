/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import TiptapEditor, { TiptapEditorHandle } from "./TiptapEditor";


type Props = {
  action: (formData: FormData) => Promise<{ slug: string; published: boolean }>;
};

export default function AdminNewPostForm({ action }: Props) {
  const editorRef = useRef<TiptapEditorHandle>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    try {
      setPending(true);
      setError(null);
      const html = editorRef.current?.getHTML() ?? "";
      formData.set("content", html);
      const res = await action(formData);
      // Navigate after create
      window.location.href = res.published
        ? `/blog/${res.slug}`
        : "/admin/blog";
    } catch (e: any) {
      setError(e?.message ?? "Failed to save post");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className='mx-auto max-w-2xl p-6'>
      <h1 className='text-2xl font-bold mb-4'>New Blog Post</h1>

      {error && (
        <div className='mb-4 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700'>
          {error}
        </div>
      )}

      <form action={onSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Title</label>
          <input
            name='title'
            type='text'
            required
            className='mt-1 w-full rounded-md border px-3 py-2'
            placeholder='Post title'
          />
        </div>

        <div>
          <label className='block text-sm font-medium'>
            Excerpt (optional)
          </label>
          <textarea
            name='excerpt'
            className='mt-1 w-full rounded-md border px-3 py-2'
            placeholder='Short summary…'
            rows={2}
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Content</label>
          <TiptapEditor ref={editorRef} />
        </div>

        {/* Will be filled by onSubmit */}
        <input type='hidden' name='content' />

        <label className='inline-flex items-center gap-2'>
          <input name='publish' type='checkbox' />
          <span>Publish immediately</span>
        </label>

        <div className='flex items-center gap-3'>
          <button
            type='submit'
            disabled={pending}
            className='rounded-md bg-black px-4 py-2 text-white disabled:opacity-60'
          >
            {pending ? "Saving…" : "Save"}
          </button>
          <a href='/admin' className='text-sm underline underline-offset-4'>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
