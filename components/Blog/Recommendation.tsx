import React, { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";
import Link from "next/link";
const Recommendation = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [lastRead, setLastRead] = useState<Record<string, string>>({});
  useEffect(() => {
    async function getRecommendations() {
      try {
        //get recommendations from api
        const response = await fetch("/api/Blog", { method: "GET" });
        const { formattedBlogs } = await response.json();
        setRecommendations(formattedBlogs);

        //get last read article from local storage
        const title = localStorage.getItem("lastReadTitle") ?? "";
        const ID = localStorage.getItem("lastReadID") ?? "";
        setLastRead({ title, ID });
      } catch (error) {
        console.error("Failed to fetch recommendations");
      }
    }
    getRecommendations();
  }, []);

  return (
    <div>
      <h1 className="mb-8 text-xl">Recommended</h1>
      {recommendations.length > 0 ? (
        recommendations.map(({ _id, title, date }) => (
          <RecommendationCard key={_id} id={_id} title={title} date={date} />
        ))
      ) : (
        <div className="flex flex-col gap-4 mb-8 mt-4">
          <div className="bg-item animate-pulse h-6 w-[50%] rounded-sm"></div>
          <div className="bg-item animate-pulse h-6 w-[15%] rounded-sm mb-5"></div>

          <div className="bg-item animate-pulse h-6 w-[45%] rounded-sm"></div>
          <div className="bg-item animate-pulse h-6 w-[15%] rounded-sm mb-5"></div>

          <div className="bg-item animate-pulse h-6 w-[40%] rounded-sm"></div>
          <div className="bg-item animate-pulse h-6 w-[15%] rounded-sm mb-5"></div>
        </div>
      )}
      <h1 className="mt-20 mb-8 text-xl">Continue reading</h1>
      <Link href={`/Blog/${lastRead.ID}`}>
        <p className=" font-bold font-grotesk w-[95%] mb-2 tracking-tighter text-xl">
          {lastRead.title}
        </p>
      </Link>
    </div>
  );
};

export default Recommendation;
