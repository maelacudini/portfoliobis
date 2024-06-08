import ParallaxText from "../common/ParallaxText";

export default function Hero() {
  return (
    <section className="min-h-lvh py-[5lvh] px-[5lvw] flex flex-col justify-end gap-8">
      <ParallaxText classes="h1" text="Product Designer" />
      <div className="btn flex gap-2 items-center">
        <p className="animate-scale">🟢</p>
        <p>Available for Work</p>
      </div>
      <p className="h3">
        Hi. I am Isabelle, and I am a{" "}
        <span className="text-neutral-400 playfair">Product Designer</span>{" "}
        since <span className="text-neutral-400 playfair">2020</span>,{" "}
        <span className="text-neutral-400 playfair">based in Monaco</span>. I
        have collaborated with big brands in the music industry, fashion
        industry and much more.
      </p>
    </section>
  );
}
