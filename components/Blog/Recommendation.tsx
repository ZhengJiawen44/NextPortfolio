import React, { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";
const Recommendation = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    async function getRecommendations() {
      try {
        const response = await fetch("/api/Blog", { method: "GET" });
        const { formattedBlogs } = await response.json();
        setRecommendations(formattedBlogs);
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
        <p>Loading recommendations...</p>
      )}
    </div>
  );
};

export default Recommendation;
