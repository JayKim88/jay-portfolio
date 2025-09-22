import React from "react";
import { motion } from "framer-motion";

import { testing, devops, client, server } from "../constants/stacks";
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
        <StacksElements title="DevOps" data={devops} />
      </AnimatedItem>
      <AnimatedItem index={3}>
        <StacksElements title="Testing" data={testing} />
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
        {data.map(({ name, img, level, keyword }, index) => (
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
                style={{
                  overflowWrap: "anywhere",
                }}
                className={`rotate-y-180 flex flex-wrap items-center
                  justify-center flex-col ${commonStackStyle} p-2`}
              >
                <div
                  className={`px-2 py-1 rounded-full text-xs font-bold text-white mb-1 ${
                    level === "Expert"
                      ? "bg-green-500"
                      : level === "Advanced"
                      ? "bg-blue-500"
                      : level === "Proficient"
                      ? "bg-yellow-500"
                      : "bg-orange-500"
                  }`}
                >
                  {level}
                </div>
                <div className="text-xs text-center text-white font-medium">
                  {keyword}
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
