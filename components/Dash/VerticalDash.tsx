"use client";
import { useObserver } from "@/hooks/useObserver";
import IslandDash from "@/components/Dash/IslandDash";
import React from "react";

const verticalDash = () => {
  const [dashboardRef, isVisible] = useObserver();
  return (
    <>
      {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} />
    </>
  );
};

export default verticalDash;
