"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item"; // Add this import
import Toolbar from "./Toolbar";
const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-8",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-8",
        },
      }),
      ListItem, // Add the ListItem extension
      Heading.configure({
        levels: [1],
        HTMLAttributes: { class: "text-4xl" },
      }),
    ],
    content: `
    dsd
    `,
  });

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
