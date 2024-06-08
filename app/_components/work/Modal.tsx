import { ModalType } from "@/app/_utils/types";
import { motion } from "framer-motion";

export default function Modal({ project, setOpen }: ModalType) {
  return (
    <section className="flex flex-col gap-4 absolute bottom-0 left-0 right-0 border border-[#e5e5e5] rounded-t-2 bg-black py-[4rem] px-[2rem] z-[12] h-min">
      <span
        onClick={() => setOpen(false)}
        className="absolute cursor-grab top-8 left-[50%] translate-y-[-50%] rounded-2 border-2 border-white w-[2rem]"
      />
      <p className="h3">
        Want to know <span className="text-neutral-400 playfair">more?</span>
      </p>
      <p>{project.description}</p>
    </section>
  );
}
