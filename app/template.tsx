"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { ChildrenType } from "./_utils/types";

export default function Template({ children }: ChildrenType) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
