import { CardType, ChildrenType } from "@/app/_utils/types";

export default function Card({ children, classes }: CardType) {
  return (
    <div
      className={`${classes} rounded-2 bg-neutral-800 p-[2rem] border border-neutral-400`}
    >
      {children}
    </div>
  );
}
