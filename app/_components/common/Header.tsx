"use client";
import { links } from "@/app/_utils/data";
import { PositionType } from "@/app/_utils/types";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="fixed left-0 top-0 right-0 z-[100] flex justify-center items-center py-[5lvh] px-[5lvw]">
      <nav className="relative flex items-center bg-black p-2 w-fit border border-[#e5e5e5] rounded-2">
        {links.map((link, i) => {
          const ref = useRef<HTMLAnchorElement>(null);
          return (
            <Link
              ref={ref}
              onMouseLeave={() => {
                setPosition((ps) => ({
                  ...ps,
                  opacity: 0,
                }));
              }}
              onMouseEnter={() => {
                if (!ref.current) {
                  return;
                }
                const { width } = ref?.current.getBoundingClientRect();
                setPosition({
                  width,
                  left: ref.current.offsetLeft,
                  opacity: 1,
                });
              }}
              className="mix-blend-difference relative z-10 py-2 px-4"
              key={i + link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
        <Cursor position={position} />
      </nav>
    </header>
  );
}

export function Cursor({ position }: { position: PositionType }) {
  return (
    <motion.span
      animate={position}
      className="absolute z-0 rounded-full bg-white h-11 w-36"
    />
  );
}
