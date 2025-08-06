import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollY } from "../hooks/useScrollY";

const dynamicRadius = ({
  initialRadius,
  yPosition,
  growthRate = 0.1,
  yRatio,
}) => {
  const screenYPosition = useScrollY({
    wait: 0,
    yRatio: yRatio ?? 3 / 4,
  });

  const deviceType = useMemo(() => {
    const width = window.innerWidth;
    return width <= 640 ? "mobile" : width <= 1024 ? "tablet" : "desktop";
  }, []);

  const formattedGrowthRate = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return growthRate * 0.5;
      case "tablet":
        return growthRate * 0.7;
      default:
        return growthRate;
    }
  }, [growthRate, deviceType]);

  const growth = (screenYPosition - yPosition) * formattedGrowthRate;
  const readyGrowth = screenYPosition > yPosition;

  return readyGrowth ? initialRadius + growth : initialRadius;
};

const createCircleAnimation = (delay = 0) => ({
  initial: { scale: 0, opacity: 0, rotate: -180 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.8,
      delay: delay,
    },
  },
});

export const BackgroundImages = React.memo(({ svgWrapperRef, svgWidth }) => {
  const currentScrollHeight = document.documentElement.scrollHeight;

  return (
    <div
      ref={svgWrapperRef}
      style={{ height: "100%" }}
      className="absolute w-full -z-1 left-0"
    >
      <svg id="svg-container" className="relative" width="100%" height="100%">
        {/* left */}
        <motion.circle
          cx="570"
          cy="-30"
          r={dynamicRadius({
            initialRadius: 110,
            yPosition: -30,
            growthRate: 0.14,
          })}
          fill="rgba(138, 133, 32, 0.3)"
          {...createCircleAnimation(0.1)}
        />
        <motion.circle
          cx="100"
          cy="-30"
          r={dynamicRadius({
            initialRadius: 420,
            yPosition: -30,
            growthRate: 0.16,
          })}
          fill="rgba(137, 255, 78, 0.1)"
          {...createCircleAnimation(0.2)}
        />
        <motion.circle
          cx="30"
          cy="500"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 500,
            growthRate: 0.13,
          })}
          fill="rgba(35, 207, 8, 0.089)"
          {...createCircleAnimation(0.3)}
        />
        <motion.circle
          cx="70"
          cy="1900"
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: 1900,
            growthRate: 0.12,
            yRatio: 1.1,
          })}
          fill="rgba(137, 255, 78, 0.24)"
          {...createCircleAnimation(0.4)}
        />
        <motion.circle
          cx="170"
          cy="2200"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 2200,
            growthRate: 0.11,
            yRatio: 1.1,
          })}
          fill="rgba(182, 103, 12, 0.349)"
          {...createCircleAnimation(0.5)}
        />
        <motion.circle
          cx="240"
          cy="5000"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 4800,
            growthRate: 0.16,
            yRatio: 1.1,
          })}
          fill="rgba(85, 250, 35, 0.13)"
          {...createCircleAnimation(0.6)}
        />
        <motion.circle
          cx="260"
          cy="6000"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 6000,
            growthRate: 0.1,
            yRatio: 1.1,
          })}
          fill="rgba(195, 254, 85, 0.23)"
          {...createCircleAnimation(0.7)}
        />
        <motion.circle
          cx="100"
          cy="6200"
          r={dynamicRadius({
            initialRadius: 230,
            yPosition: 6200,
            growthRate: 0.12,
            yRatio: 1.1,
          })}
          fill="rgba(7, 255, 94, 0.114)"
          {...createCircleAnimation(0.8)}
        />
        <motion.circle
          cx={70}
          cy={currentScrollHeight - 100}
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: currentScrollHeight - 100,
            growthRate: 0.7,
            yRatio: 1.1,
          })}
          fill="rgba(84, 175, 18, 0.344)"
          {...createCircleAnimation(0.9)}
        />
        <motion.circle
          cx={370}
          cy={currentScrollHeight}
          r={dynamicRadius({
            initialRadius: 80,
            yPosition: currentScrollHeight,
            growthRate: 0.6,
            yRatio: 1.1,
          })}
          fill="rgba(175, 159, 18, 0.344)"
          {...createCircleAnimation(1.0)}
        />
        {/* right */}
        <motion.circle
          cx={svgWidth - 20}
          cy="740"
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: 740,
            growthRate: 0.15,
            yRatio: 1,
          })}
          fill="rgba(106, 219, 94, 0.2)"
          {...createCircleAnimation(1.4)}
        />
        <motion.circle
          cx={svgWidth - 6}
          cy="1100"
          r={dynamicRadius({
            initialRadius: 140,
            yPosition: 1100,
            growthRate: 0.14,
            yRatio: 1.1,
          })}
          fill="rgba(162, 246, 53, 0.186)"
          {...createCircleAnimation(1.5)}
        />
        <motion.circle
          cx={svgWidth - 140}
          cy="3800"
          r={dynamicRadius({
            initialRadius: 200,
            yPosition: 3800,
            growthRate: 0.18,
            yRatio: 1,
          })}
          fill="rgba(133, 255, 67, 0.2)"
          {...createCircleAnimation(1.6)}
        />
        <motion.circle
          cx={svgWidth - 200}
          cy={currentScrollHeight - 2000}
          r={dynamicRadius({
            initialRadius: 140,
            yPosition: currentScrollHeight - 2000,
            growthRate: 0.2,
            yRatio: 1,
          })}
          fill="rgba(16, 250, 137, 0.186)"
          {...createCircleAnimation(1.7)}
        />
        <motion.circle
          cx={svgWidth + 10}
          cy={currentScrollHeight - 250}
          r={dynamicRadius({
            initialRadius: 220,
            yPosition: currentScrollHeight - 250,
            growthRate: 0.6,
            yRatio: 1,
          })}
          fill="rgba(162, 246, 53, 0.186)"
          {...createCircleAnimation(1.8)}
        />
        <motion.circle
          cx={svgWidth - 290}
          cy={currentScrollHeight - 100}
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: currentScrollHeight - 100,
            growthRate: 0.4,
            yRatio: 1.05,
          })}
          fill="rgba(246, 236, 53, 0.186)"
          {...createCircleAnimation(1.9)}
        />
        <motion.circle
          cx={svgWidth - 600}
          cy={currentScrollHeight}
          r={dynamicRadius({
            initialRadius: 100,
            yPosition: currentScrollHeight,
            growthRate: 0.6,
            yRatio: 1.1,
          })}
          fill="rgba(246, 156, 53, 0.344)"
          {...createCircleAnimation(2.0)}
        />
      </svg>
    </div>
  );
});
