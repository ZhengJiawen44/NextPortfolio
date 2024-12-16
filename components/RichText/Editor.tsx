"use client";
import Toolbar from "./Toolbar";
import { EditorContent, useEditor } from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import { MAX_LENGTH } from "@/schemas";

import { useState } from "react";

interface textEditorProps {
  content: string;
  onChange: (richText: string) => void;
}

const TextEditor = ({ content, onChange }: textEditorProps) => {
  const [wordCount, setWordCount] = useState(0);
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        heading: false,
      }),
      Code.configure({
        HTMLAttributes: { class: "font-[Consolas]" },
      }),

      CodeBlock.configure({
        defaultLanguage: "plaintext",
        HTMLAttributes: {
          class:
            "text-[0.7rem] md:text-[1rem] font-[Consolas] bg-black rounded-xl p-4 my-4 whitespace-pre-wrap break-words",
        },
      }),
      Heading.configure({
        HTMLAttributes: { class: "text-[2rem] leading-[8rem]" },
      }),

      BulletList.configure({ HTMLAttributes: { class: "list-decimal" } }),
      OrderedList.configure({ HTMLAttributes: { class: "list-disc" } }),
      Image.configure({
        allowBase64: true,
        inline: true,
        HTMLAttributes: { class: "w-[100%] md:w-[100%] m-auto my-[2rem]" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph", "image"] }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none max-w-none",
      },
    },
    onUpdate() {
      setWordCount(editor?.getText().length || 0);
      onChange(editor?.getHTML());
    },
  });
  editor?.on("create", () => {
    setWordCount(editor.getText().length);
  });

  return (
    <>
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
          }
        `}</style>
      </div>
      <p>
        words: {wordCount}/{MAX_LENGTH}
      </p>
    </>
  );
};

export default TextEditor;
