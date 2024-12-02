import { useEffect, useRef, useState } from "react";

export const useObserver = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dashboardRef = useRef(null);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio == 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.0 }
    );
    if (dashboardRef.current) {
      intersectionObserver.observe(dashboardRef.current);
    }
    return () => intersectionObserver.disconnect();
  }, []);
  return [dashboardRef, isVisible];
};
