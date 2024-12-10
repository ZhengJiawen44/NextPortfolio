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
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
} from "react-icons/lu";
import { Toggle } from "@/components/ui/toggle";

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
    </div>
  );
};

export default Toolbar;
