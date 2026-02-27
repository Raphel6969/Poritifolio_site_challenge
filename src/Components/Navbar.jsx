import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar({ heroRef, projectsRef, storyRef, contactRef }) {
  useGSAP(() => {
    gsap.fromTo(
      ".nav-inner",
      { background: "transparent" },
      {
        background: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        borderRadius: 9999,
      },
    );
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4">
      <div className="nav-inner mx-auto max-w-6xl flex items-center justify-between px-12 py-3">
        <button onClick={() => scrollTo(heroRef)}>
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-12 rounded-full"
          />
        </button>

        <ul className="flex space-x-8 items-center">
          <li>
            <button onClick={() => scrollTo(projectsRef)} className="nav-link">
              Projects
            </button>
          </li>

          <li>
            <button onClick={() => scrollTo(storyRef)} className="nav-link">
              About Me
            </button>
          </li>

          <li>
            <button onClick={() => scrollTo(contactRef)} className="nav-link">
              Contact
            </button>
          </li>

          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
