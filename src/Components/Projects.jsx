import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    gsap.from(".project-item", {
      opacity: 0,
      y: 80,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".project",
        start: "top 70%",
      },
    });

    gsap.from(".project", {
      y: 80,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".project",
        start: "10% 70%",
      },
    });
  }, []);
  return (
    <section>
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-[#f5f6fa] text-[4rem] project header-text">PROJECTS</h1>
        </div>

        <div className="h-screen w-full flex items-center justify-center project">
          <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3 p-20 xl:m-64 lg:m-32 md:m-16">
            <div className="col-span-1 row-span-2 rounded-xl project-item">
              <a href="https://www.instagram.com/p/DTsltnvE6Rk/">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/blender2.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-span-1 row-span-1 rounded-xl project-item">
              <a href="https://www.figma.com/design/8h9p6KDrwKNXRQhb9ngjvL/ManipalDaily?t=HOl4S2fIE3ZvI5i6-1">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/design1.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-span-2 row-span-1 rounded-xl project-item">
              <a href="https://www.instagram.com/p/DVPiTJqDGl6/">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/blender1.png"
                  alt=""
                />
              </a>
            </div>

            <div className="col-span-1 row-span-1 rounded-xl project-item">
              <a href="https://github.com/Raphel6969/BlogingSite_FireBase_Integration">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/site2.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-span-1 row-span-1 rounded-xl project-item">
              <a href="https://github.com/Raphel6969/Minesweeper_Game">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/site1.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-span-1 row-span-1 rounded-xl project-item">
              <a href="https://github.com/Raphel6969/forest_fire_model">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/site3.png"
                  alt=""
                />
              </a>
            </div>

            <div className="col-span-2 row-span-1 rounded-xl project-item ">
              <a href="https://www.instagram.com/p/CpCzkQVrIFL/">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/blender3.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-span-1 row-span-1 rounded-xl project-item">
              <a
                className="transition-transform duration-500 ease-out hover:scale-105"
                href="https://www.figma.com/design/pGnyZSs5ey5jHVS1AOPPZP/Flux---Figma-Build-Tutorial--Starter---Community-?node-id=0-1&t=HOl4S2fIE3ZvI5i6-1"
              >
                <img src="/images/design2.png" alt="" />
              </a>
            </div>
            <div className="col-span-1 row-span-1 rounded-xl project-item">
              <a href="https://mealsnap.onrender.com/">
                <img
                  className="transition-transform duration-500 ease-out hover:scale-105"
                  src="/images/site4.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
