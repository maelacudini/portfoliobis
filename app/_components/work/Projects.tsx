"use client";
import { projects } from "@/app/_utils/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Projects() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-100%`]);

  return (
    <section
      ref={heroRef}
      className="relative bg-black z-[10]"
      style={{ height: `calc(${projects.length * 100}vw)` }}
    >
      <motion.div
        style={{ x }}
        className="h-[100lvh] sticky top-0 flex w-max overflow-hidden"
      >
        {projects.map((project, i) => {
          const data = new Date(project.date).toDateString();
          const [open, setOpen] = useState(false);
          return (
            <article
              className="relative h-[100lvh] w-[100lvw] py-[5lvh] px-[5lvw] flex justify-center items-center"
              key={i + project.title}
            >
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="absolute object-cover brightness-[25%]"
              />
              <div className="relative flex flex-col items-center flex-wrap gap-4">
                <p className="h2">{project.title}</p>
                <p className="playfair">{data}</p>
                <button onClick={() => setOpen(true)} className="btn">
                  Details📝
                </button>
              </div>

              {open && (
                <Modal key="modal" setOpen={setOpen} project={project} />
              )}
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
