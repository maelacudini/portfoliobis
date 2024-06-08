import { links, socials } from "@/app/_utils/data";
import Card from "./Card";

export default function Footer() {
  return (
    <footer className="px-[5lvw] py-[5lvh] relative bg-black">
      <Card classes="">
        <div className="flex flex-col gap-40">
          <div className="flex flex-col gap-4">
            <p className="h1">
              Let's work{" "}
              <span className="text-neutral-400 playfair">together</span>
            </p>
            <a className="btn" href={links[2].href}>
              Send me a mail ✉️
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-between items-end">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 playfair">When</p>
              <p>Monday to Friday, 09:00 - 15:00</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 playfair">Where</p>
              <p>Monaco, Monaco</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 playfair">Socials</p>
              <div className="flex gap-2">
                {socials.map((social, i) => (
                  <a
                    className="hover:text-neutral-400 transition"
                    key={i}
                    href={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 playfair">Developed</p>
              <p>By @maelacudini</p>
            </div>
          </div>
        </div>
      </Card>
    </footer>
  );
}
