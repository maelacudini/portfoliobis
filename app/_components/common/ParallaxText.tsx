"use client";
import { ParallaxTextType } from "@/app/_utils/types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ParallaxText({ text, classes }: ParallaxTextType) {
  const words = text.split(" ");
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-wrap" style={{ gap: "0.5rem 2rem" }}>
      {words.map((word, j) => (
        <div
          style={{
            color: j + 1 === words.length ? "#A3A3A3" : "#E5E5E5",
          }}
          key={j}
          className={`flex ${classes} ${
            j + 1 === words.length ? "playfair" : ""
          } mix-blend-difference`}
        >
          {word.split("").map((letter, i) => {
            const y = useTransform(
              scrollYProgress,
              [0, 0.1],
              [0, Math.random() * 100]
            );
            const ySpring = useSpring(y, { stiffness: 100, damping: 20 });
            return (
              <motion.p style={{ y: ySpring }} className={classes} key={i}>
                {letter}
              </motion.p>
            );
          })}
        </div>
      ))}
    </div>
  );
}
