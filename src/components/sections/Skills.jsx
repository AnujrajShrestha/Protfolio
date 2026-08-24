import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../ui/SectionHeading.jsx";
import { TECH_STACKS } from "../../data/config.js";
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Code2, 
  Layers 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Dynamic mapping of categories to clean developer icons
const ICON_MAP = {
  "Frontend": Layout,
  "Backend": Server,
  "Database": Database,
  "Deployment & Tools": Terminal,
  "Data Science & AI": Cpu,
  "Programming Languages": Code2,
};

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate each stack group wrapper entry
      gsap.fromTo(
        ".stack-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger animate individual tech tags inside the active card
      gsap.fromTo(
        ".tech-tag",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="stacks" ref={containerRef} className="border-t border-line/70 py-24">
      <SectionHeading eyebrow="infrastructure" title="Tech Stacks" path="~$ neofetch --tech_stacks" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_STACKS.map((stack) => {
          const IconComponent = ICON_MAP[stack.category] || Layers;
          
          return (
            <div 
              key={stack.category}
              className="stack-card opacity-0 overflow-hidden rounded-xl border border-line/80 bg-panel/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-phosphor/40"
            >
              <div className="flex items-center gap-3 border-b border-line/50 pb-4 text-signal">
                <IconComponent className="h-5 w-5 text-phosphor" />
                <h3 className="text-xs uppercase tracking-wider font-semibold">
                  {stack.category}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="tech-tag opacity-0 rounded border border-line bg-void px-2.5 py-1 text-xs font-mono text-muted transition-colors duration-200 hover:border-wire hover:text-phosphor-bright"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}