import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { footerLinks } from "../data";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".footer-icon", {
        y: 50,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="footer py-12">
      <ul className="flex items-center justify-center gap-12 mt-8">
        {footerLinks.map((foot) => (
          <li key={foot.name}>
            <a href={foot.link}>
              <div
                className="
                  w-12 h-12
                  flex items-center justify-center
                  transition-transform duration-300 ease-out
                  hover:scale-110
                "
              >
                <img
                  src={foot.icon}
                  alt={foot.name}
                  className="w-7 h-7 footer-icon"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
