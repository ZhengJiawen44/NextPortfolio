import React from "react";
import DOMPurify from "dompurify";
const BlogContent = ({ content }: { content: string }) => {
  const c = DOMPurify.sanitize(content);
  return (
    <p
      className="text-foreground w-full text-[1.2rem] md:text-[xl] leading-10 break-words"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;
