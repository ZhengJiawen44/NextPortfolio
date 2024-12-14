"use client";
import React from "react";
import { Editor } from "@tiptap/react";
import {
  TbBold,
  TbStrikethrough,
  TbItalic,
  TbList,
  TbListNumbers,
} from "react-icons/tb";
import {
  LuImage,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuAlignCenter,
  LuAlignRight,
  LuAlignLeft,
} from "react-icons/lu";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "../ui/button";

interface ToolbarProps {
  editor: Editor | null;
}
const Toolbar = ({ editor }: ToolbarProps) => {
  !editor && null;

  return (
    <div className="flex border">
      <Toggle
        pressed={editor?.isActive("heading", { level: 1 })}
        onPressedChange={() => {
          editor?.chain().focus().toggleHeading({ level: 1 }).run();
        }}
      >
        <span>
          <LuHeading1 />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("heading", { level: 2 })}
        onPressedChange={() => {
          editor?.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <span>
          <LuHeading2 />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("heading", { level: 3 })}
        onPressedChange={() => {
          editor?.chain().focus().toggleHeading({ level: 3 }).run();
        }}
      >
        <span>
          <LuHeading3 />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("bold")}
        onPressedChange={() => {
          editor?.chain().focus().toggleBold().run();
        }}
      >
        <span>
          <TbBold />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("strike")}
        onPressedChange={() => {
          editor?.chain().focus().toggleStrike().run();
        }}
      >
        <span>
          <TbStrikethrough />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("italic")}
        onPressedChange={() => {
          editor?.chain().focus().toggleItalic().run();
        }}
      >
        <span>
          <TbItalic />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("bulletList")}
        onPressedChange={() => {
          editor?.chain().focus().toggleBulletList().run();
        }}
      >
        <span>
          <TbList />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive("orderedList")}
        onPressedChange={() => {
          editor?.chain().focus().toggleOrderedList().run();
        }}
      >
        <span>
          <TbListNumbers />
        </span>
      </Toggle>

      <Toggle
        pressed={editor?.isActive({ TextAlign: "left" })}
        onPressedChange={() => {
          editor?.chain().focus().setTextAlign("left").run();
        }}
      >
        <span>
          <LuAlignLeft />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive({ TextAlign: "center" })}
        onPressedChange={() => {
          editor?.chain().focus().setTextAlign("center").run();
        }}
      >
        <span>
          <LuAlignCenter />
        </span>
      </Toggle>
      <Toggle
        pressed={editor?.isActive({ TextAlign: "right" })}
        onPressedChange={() => {
          editor?.chain().focus().setTextAlign("right").run();
        }}
      >
        <span>
          <LuAlignRight />
        </span>
      </Toggle>
      <Button
        onClick={() => {
          const url = window.prompt("URL");

          if (url) {
            editor?.chain().focus().setImage({ src: url });
            editor?.commands.setImage({
              src: url,
              alt: "a boring image",
              title: "a title",
            });
          }
        }}
        className="bg-transparent hover:bg-accent text-item-foreground hover:text-accent-foreground"
      >
        <LuImage />
      </Button>
    </div>
  );
};

export default Toolbar;
