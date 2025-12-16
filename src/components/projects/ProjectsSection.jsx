import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot (Java + ChatGPT API)",
    desc: "Enterprise-grade conversational automation."
  },
  {
    title: "Customer Churn Prediction",
    desc: "ML model achieving 50% recall with insights."
  },
  {
    title: "Intelligent Data Entry Automation",
    desc: "OCR system reducing manual effort by 40%."
  }
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ scrollMarginTop: "120px" }}
      className="py-32 bg-gradient-to-b from-[#12061f] to-black"
    >
      <h2 className="text-center text-3xl font-bold text-white mb-16">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 rounded-xl bg-white/5 border border-pink-500/20
                       shadow-[0_0_40px_rgba(236,72,153,0.15)]"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="text-gray-400 mt-3">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
