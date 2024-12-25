"use client";
import { useSearchParams } from "next/navigation";
import FailedVerification from "@/components/Auth/FailedVerification";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const page = () => {
  const [isExpired, setExpired] = useState(false);
  const params = useSearchParams();
  const payload = params.get("token");

  if (payload === null) {
    return <FailedVerification />;
  }
  //call server end point and verify token
  useEffect(() => {
    const validation = async () => {
      const res = await fetch("/api/Auth/VerifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload }),
      });
      const body = await res.json();
      if (body.message) {
        redirect("/Blog");
      } else {
        setExpired(true);
      }
    };
    validation();
  }, []);

  if (isExpired) {
    return <FailedVerification />;
  }
};

export default page;
