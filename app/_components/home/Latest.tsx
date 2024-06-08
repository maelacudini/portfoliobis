"use client";
import { projects } from "@/app/_utils/data";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ProjectType } from "@/app/_utils/types";
import Link from "next/link";

export default function Latest() {
  return (
    <section className="flex flex-col gap-8 py-[5lvh] px-[5lvw]">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <p className="h3">
          Latest <span className="text-neutral-400 playfair">Projects</span>
        </p>
        <Link className="btn" href="/work">
          See more 👀
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {projects.map((project, i) => (
          <Card key={i} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}

export function Card({ project, i }: { project: ProjectType; i: number }) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [25, -25]);
  const rotateXSpring = useSpring(rotateX, {
    stiffness: 100,
    bounce: 0,
    damping: 20,
  });
  const rotateY = useTransform(x, [0, 400], [-25, 25]);
  const rotateYSpring = useSpring(rotateY, {
    stiffness: 100,
    bounce: 0,
    damping: 20,
  });

  function handleMouseEnter(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseLeave(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(rect.width / 2);
    y.set(rect.height / 2);
  }

  return (
    <motion.article
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
      className="grow basis-[30rem] rounded-2 relative h-[25rem] w-[25rem]"
    >
      <Image
        alt={project.title}
        src={project.image}
        fill
        className="object-cover rounded-2"
        priority={i === 0 ? true : false}
        loading="eager"
        sizes="(max-width: 1080px) 100vw, (max-width: 1600px) 50vw, 33vw"
      />
      <motion.div
        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
        className="flex gap-4 justify-between items-center bg-[#15151525] backdrop-blur-lg rounded-2 p-4 absolute left-[1rem] right-[1rem] bottom-[1rem]"
      >
        <div className="flex flex-col gap-2">
          <p className="h4 playfair">✦ {project.title}</p>
          <p>{project.role}</p>
        </div>
        <Link className="border border-[#e5e5e5] rounded-2 p-2" href={"/work"}>
          <Image
            alt="arrow"
            src="/icons/arrow.svg"
            height={15}
            width={15}
            loading="lazy"
            className="invert"
          />
        </Link>
      </motion.div>
    </motion.article>
  );
}
