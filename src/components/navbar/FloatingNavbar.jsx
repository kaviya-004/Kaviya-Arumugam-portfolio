import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Internship" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "extras", label: "Extra Activities" },
  { id: "contact", label: "Contact" },
];

export default function FloatingNavbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -50% 0px", // accounts for navbar height
        threshold: 0.25,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                 bg-black/70 backdrop-blur-xl border border-white/10
                 rounded-full px-6 py-3 flex gap-6"
    >
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={`relative text-sm font-medium transition-colors
            ${
              active === sec.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
        >
          {sec.label}

          {active === sec.id && (
            <motion.span
              layoutId="nav-underline"
              className="absolute left-0 -bottom-1 h-[2px] w-full
                         bg-gradient-to-r from-cyan-400 to-pink-500
                         rounded-full"
            />
          )}
        </a>
      ))}
    </motion.nav>
  );
}
