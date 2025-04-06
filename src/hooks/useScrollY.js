import { useEffect, useState } from "react";
import { throttle } from "lodash";

export const useScrollY = (props) => {
  const [scrollY, setScrollY] = useState(0);

  const { wait = 800, yRatio = 1 / 2 } = props ?? {};

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY + window.innerHeight * yRatio);
    }, wait);

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};
