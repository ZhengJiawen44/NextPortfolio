"use client";
import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  TbBold,
  TbStrikethrough,
  TbItalic,
  TbList,
  TbListNumbers,
  TbCode,
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
  const [link, setLink] = useState("");
  return (
    <div className="flex border sticky top-0 z-10 bg-item flex-wrap">
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
        onClick={(e) => {
          e.preventDefault();

          editor?.commands.toggleCodeBlock();
        }}
        className="bg-transparent hover:bg-accent text-item-foreground hover:text-accent-foreground"
      >
        <TbCode />
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="bg-transparent hover:bg-accent text-item-foreground hover:text-accent-foreground"
            onClick={() => setLink("")}
          >
            <LuImage />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Image link</DialogTitle>
            <DialogDescription>paste your images's address</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  editor?.commands.setImage({
                    src: link,
                    alt: "a boring image",
                    title: "a title",
                  });
                }}
                size="sm"
                className="px-3"
              >
                <span className="sr-only">Copy</span>
                paste
              </Button>
            </DialogClose>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Toolbar;
