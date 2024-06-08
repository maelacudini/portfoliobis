import Hero from "./_components/home/Hero";
import Latest from "./_components/home/Latest";
import SlidingLogos from "./_components/home/SlidingLogos";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <SlidingLogos />
      <Latest />
    </main>
  );
}
