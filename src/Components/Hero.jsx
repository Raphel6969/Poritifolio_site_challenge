import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { skills } from "../data";
import { useRef, lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero22() {
  const marqueeRef = useRef(null);
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".para", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(".spline", {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 spline">
        <Suspense fallback={<div className="w-full h-full bg-black/20" />}>
          <Spline
            scene="https://prod.spline.design/Ly4hluiB-a8Jrb3t/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>
      <div className="absolute inset-0 z-10 h-full flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-8xl font-bold text-center nav-link title header-text">
          SASWAT SAHU
        </h1>
        <p className="mt-6 text-xl text-[#B6B8E6] max-w-xl text-center para">
          I build interactive web experiences using code, motion, and 3D focused
          on clean design and performance.
        </p>
      </div>
      <div className="absolute bottom-10 left-0 w-full z-20 overflow-hidden pointer-events-none">
        <div className="flex gap-10 w-max" ref={marqueeRef}>
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              <span className="text-sm font-medium text-white/70 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
