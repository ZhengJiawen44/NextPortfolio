import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookie = await cookies();
  console.log(cookie);

  return <div>page</div>;
};

export default page;
