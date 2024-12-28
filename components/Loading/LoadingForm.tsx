import React from "react";

const LoadingForm = () => {
  return (
    <div className="flex flex-col gap-4 mb-8 mt-4">
      <div className="bg-item animate-pulse h-6 w-[50%] rounded-sm"></div>
      <div className="bg-item animate-pulse h-6 w-[15%] rounded-sm mb-5"></div>

      <div className="bg-item animate-pulse h-6 w-[45%] rounded-sm"></div>
      <div className="bg-item animate-pulse h-6 w-[15%] rounded-sm mb-5"></div>

      <div className="bg-item animate-pulse h-6 w-[40%] rounded-sm"></div>
      <div className="bg-item animate-pulse h-6 w-[15%] rounded-sm mb-5"></div>
    </div>
  );
};

export default LoadingForm;
