import { motion } from "framer-motion";

const skills = [
  "Java & Spring Boot",
  "Python & Machine Learning",
  "React & Tailwind",
  "SQL & Databases",
  "REST APIs",
  "Git & CI/CD"
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{ scrollMarginTop: "120px" }}
      className="py-32 bg-[#021414]"
    >
      <h2 className="text-center text-3xl font-bold text-white mb-14">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="p-6 rounded-xl bg-white/5 border border-emerald-400/20 text-white
                       shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
