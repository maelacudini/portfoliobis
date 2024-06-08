"use client";
import { logos } from "@/app/_utils/data";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SlidingLogos() {
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    let animationId: any;

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstSlide.current, { xPercent: xPercent });
      gsap.set(secondSlide.current, { xPercent: xPercent });
      xPercent += 0.05 * -1;
      animationId = requestAnimationFrame(animate);
    };

    if (firstSlide.current && secondSlide.current) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [firstSlide, secondSlide]);

  return (
    <section className="relative whitespace-nowrap py-[5lvh] overflow-hidden after:bg-gradient-to-r after:from-[#151515] after:to-[#15151510] after:absolute after:content-[''] after:left-0 after:right-0 after:top-0 after:bottom-0 after:h-full after:z-[10] after:pointer-events-none">
      <div ref={firstSlide} className="flex gap-4 justify-around">
        {logos.map((logo, i) => (
          <Image
            className="invert"
            key={i}
            width={50}
            height={50}
            alt="logo"
            src={logo}
          />
        ))}
      </div>
      <div
        ref={secondSlide}
        className="flex gap-4 justify-around absolute left-[100%] top-[5lvh] w-full"
      >
        {logos.map((logo, i) => (
          <Image
            className="invert"
            key={i}
            width={50}
            height={50}
            alt="logo"
            src={logo}
          />
        ))}
      </div>
    </section>
  );
}
