import React from "react";

const noSSR = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default noSSR;
