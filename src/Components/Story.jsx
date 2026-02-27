import "./Story.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const path = document.getElementById("stroke-path");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.to("#stroke-path", {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".spotlight",
        start: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <section className="hero">
        <h1 className="header-text text-[#f5f6fa]">MY STORY</h1>
      </section>
      <section className="spotlight">
        <div className="row">
          <img src="/images/img1.png" alt="" className="img" />
        </div>

        <div className="row">
          <div className="col">
            <div className="img">
              <img src="/images/img3.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>
                Crafting digital experiences with purpose.
              </h2>
              <p>
                As a developer with a passion for design, I bridges the gap between aesthetics and functionality. My journey began with a simple curiosity for how things work on the web, which evolved into a deep dive into interactive 3D and motion.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <h2>Always exploring new bounds.</h2>
              <p>
                When I'm not writing code, you can find me experimenting with new tools, exploring 3D modeling, or contributing to open-source projects. I actively look for fresh challenges that push my creative limits and technical boundaries.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src="/images/img2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="img">
            <img src="/images/img4.png" alt="" />
          </div>
        </div>

        <div className="svg-path">
          <svg
            width="1137"
            height="3345"
            viewBox="0 0 1137 3345"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1060.92 75.0151C1060.92 75.0151 283.925 236.515 323.925 461.515C363.925 686.515 1034.43 547.515 1060.92 848.015C1087.42 1148.52 -379.573 2952.52 218.426 1380.02C816.426 -192.485 1392.63 3316.73 627.927 3269.52"
              stroke="#1F8A8A"
              stroke-width="150"
              stroke-linecap="round"
              id="stroke-path"
            />
          </svg>
        </div>
      </section>
      <div className="outro">
        <h1 className="header-text text-[#f5f6fa]">HEY LETS CONNECT!</h1>
      </div>
    </>
  );
}
