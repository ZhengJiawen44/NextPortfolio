"use client";
import React from "react";
import Toolbar from "./Toolbar";
import { EditorContent, useEditor } from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
      }),
      BulletList.configure({ HTMLAttributes: { class: "list-decimal" } }),
      OrderedList.configure({ HTMLAttributes: { class: "list-disc" } }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: { class: "object-cover resize" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph", "image"] }),
    ],
    content: "<h1>start editing...</h1>",
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none max-w-none",
      },
    },
  });

  return (
    <div className="border rounded-lg">
      <Toolbar editor={editor} />
      <div className="editor-content">
        <EditorContent editor={editor} />
      </div>
      <style jsx global>{`
        .editor-content h1 {
          font-size: 2.5em;
          font-weight: 700;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }

        .editor-content h2 {
          font-size: 2em;
          font-weight: 600;
          margin-top: 0.8em;
          margin-bottom: 0.4em;
        }

        .editor-content h3 {
          font-size: 1.5em;
          font-weight: 500;
          margin-top: 0.6em;
          margin-bottom: 0.3em;
        }

        .editor-content p {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }

        .editor-content {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default TextEditor;
