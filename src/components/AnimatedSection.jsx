import React from "react";
import { motion } from "framer-motion";

export const AnimatedSection = ({
  children,
  className = "",
  title,
  titleComponent: TitleComponent,
  containerTag = "main",
  titleDelay = 0.1,
  contentDelay = 0.2,
  itemDelay = 0.05,
  duration = 0.6,
  titleDuration = 0.4,
  itemDuration = 0.4,
  hoverScale = 1.04,
  hoverDuration = 0.15,
}) => {
  const MotionContainer = motion[containerTag];

  return (
    <MotionContainer
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration, ease: "easeOut" }}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: titleDuration, delay: titleDelay }}
        >
          {TitleComponent ? <TitleComponent value={title} /> : title}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration, delay: contentDelay }}
      >
        {children}
      </motion.div>
    </MotionContainer>
  );
};

export const AnimatedItem = ({
  children,
  index = 0,
  delay = 0.05,
  duration = 0.4,
  hoverScale = 1.04,
  hoverDuration = 0.15,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      viewport={{ margin: "-50px" }}
      transition={{
        duration,
        delay: 0.3 + index * delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: hoverScale,
        transition: { duration: hoverDuration },
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedList = ({
  children,
  className = "",
  delay = 0.05,
  duration = 0.4,
  hoverScale = 1.04,
  hoverDuration = 0.15,
}) => {
  return (
    <motion.ul
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      viewport={{ margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ margin: "-50px" }}
          transition={{
            duration,
            delay: 0.3 + index * delay,
            ease: "easeOut",
          }}
          whileHover={{
            scale: hoverScale,
            transition: { duration: hoverDuration },
          }}
        >
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
};
