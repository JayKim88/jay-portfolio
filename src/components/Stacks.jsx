import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { both, client, server } from "../constants/stacks";
import { useTranslation } from "react-i18next";
import { AnimatedItem } from "./AnimatedSection";

export const Stacks = () => {
  return (
    <div className="flex flex-wrap max-w-[600px] gap-y-8">
      <AnimatedItem index={0}>
        <StacksElements title="Client" data={client} />
      </AnimatedItem>
      <AnimatedItem index={1}>
        <StacksElements title="Server" data={server} />
      </AnimatedItem>
      <AnimatedItem index={2}>
        <StacksElements title="Both" data={both} />
      </AnimatedItem>
    </div>
  );
};

const StacksElements = ({ title, data }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div className="text-start text-2xl" variants={itemVariants}>
        {t(title)}
      </motion.div>
      <motion.div className="flex flex-wrap gap-4" variants={containerVariants}>
        {data.map(({ name, img, usage }, index) => (
          <motion.div
            key={name}
            className="w-24 h-24 group"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div
              className="relative w-full h-full transition-transform transform-gpu
            duration-500 transform-3d group-hover:rotate-y-180"
            >
              <div
                key={name}
                className={`flex flex-col items-center justify-center gap-2 p-1 ${commonStackStyle}`}
              >
                <img src={img} alt={name} className="w-12 h-12" />
                <span className="text-xs">{name}</span>
              </div>
              <div
                className={`rotate-y-180 flex items-center justify-center flex-col ${commonStackStyle}`}
              >
                <div className="absolute top-1 text-xs font-bold tracking-tighter">
                  {t("Usage")}
                </div>
                <div className="w-14 h-14 flex items-center justify-center mt-4">
                  <CircularProgressbar
                    value={usage}
                    text={`${usage}%`}
                    styles={buildStyles({
                      outerWidth: 20,
                      textSize: "20px",
                      pathColor: "#fff",
                      textColor: "#fff",
                      trailColor: "#090000",
                    })}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const commonStackStyle = `absolute w-full h-full border border-white rounded-sm backface-hidden`;
