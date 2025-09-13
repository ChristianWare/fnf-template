/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export type TiptapEditorHandle = {
  getHTML: () => string;
  setHTML: (html: string) => void;
};

function Toolbar({ editor }: { editor: any }) {
  if (!editor) return null;

  const btn = (active: boolean) =>
    `px-2 py-1 rounded text-sm border ${active ? "bg-black text-white" : ""}`;

  const addImage = () => {
    const url = window.prompt("Image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addLink = () => {
    const url = window.prompt("Link URL");
    if (!url) return editor.chain().focus().unsetLink().run();
    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className='flex flex-wrap gap-2 p-2 border-b'>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btn(editor.isActive("bold"))}
      >
        B
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btn(editor.isActive("italic"))}
      >
        <i>I</i>
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={btn(editor.isActive("underline"))}
      >
        <u>U</u>
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={btn(editor.isActive("heading", { level: 2 }))}
      >
        H2
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={btn(editor.isActive("heading", { level: 3 }))}
      >
        H3
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btn(editor.isActive("bulletList"))}
      >
        • List
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btn(editor.isActive("orderedList"))}
      >
        1. List
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={btn(editor.isActive("blockquote"))}
      >
        &ldquo; &rdquo;
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={btn(editor.isActive("codeBlock"))}
      >{`</>`}</button>

      <button
        type='button'
        onClick={addLink}
        className='px-2 py-1 rounded text-sm border'
      >
        Link
      </button>
      <button
        type='button'
        onClick={addImage}
        className='px-2 py-1 rounded text-sm border'
      >
        Image
      </button>

      <div className='ml-auto flex gap-2'>
        <button
          type='button'
          onClick={() => editor.chain().focus().undo().run()}
          className='px-2 py-1 rounded text-sm border'
        >
          Undo
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().redo().run()}
          className='px-2 py-1 rounded text-sm border'
        >
          Redo
        </button>
      </div>
    </div>
  );
}

const TiptapEditor = forwardRef<TiptapEditorHandle, { initialHTML?: string }>(
  ({ initialHTML = "<p></p>" }, ref) => {
    // Ensure we only render on the client
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // 1) Disable SSR rendering to avoid hydration mismatches
    const editor = useEditor({
      extensions: [
        StarterKit,
        Underline,
        Link.configure({ openOnClick: false }),
        Image,
      ],
      content: "", // set later after mount
      editorProps: {
        attributes: {
          class: "prose max-w-none p-3 min-h-[320px] focus:outline-none",
        },
      },
      immediatelyRender: false, // 👈 key fix for Next/Turbo SSR
    });

    // 2) After mount, set the initial content
    useEffect(() => {
      if (mounted && editor) {
        editor.commands.setContent(initialHTML);
      }
    }, [mounted, editor, initialHTML]);

    useImperativeHandle(
      ref,
      () => ({
        getHTML: () => editor?.getHTML() ?? "",
        setHTML: (html) => editor?.commands.setContent(html),
      }),
      [editor]
    );

    if (!mounted || !editor) return null;

    return (
      <div className='border rounded-lg'>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    );
  }
);

TiptapEditor.displayName = "TiptapEditor";
export default TiptapEditor;
