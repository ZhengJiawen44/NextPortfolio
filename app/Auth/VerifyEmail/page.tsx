"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import FailedVerification from "@/components/Auth/FailedVerification";
const page = () => {
  const params = useSearchParams();
  const payload = params.get("token");

  console.log(payload);

  if (payload === null) {
    return <FailedVerification />;
  }

  return <div>{payload === null}</div>;
};

export default page;
