"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxText from "../common/ParallaxText";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -25]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="py-[5lvh] px-[5lvw] z-[-1] sticky top-0 h-screen bg-white flex items-center justify-center"
    >
      <ParallaxText classes="h1 text-white" text="Work" />
    </motion.section>
  );
}
