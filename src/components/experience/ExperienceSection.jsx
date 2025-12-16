import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-gradient-to-b from-[#120a02] to-[#1a0f04]"
    >
      {/* glow */}
      <motion.div
        className="absolute top-24 right-24 w-96 h-96 bg-orange-500/25 rounded-full blur-3xl"
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-14 text-center">
          Internship
        </h2>

        <div className="rounded-2xl bg-white/5 backdrop-blur-xl
                        border border-orange-400/30 p-10
                        shadow-[0_0_45px_rgba(249,115,22,0.2)]">
          <h3 className="text-2xl font-semibold text-white">
            Cognifyz Technologies
          </h3>

          <p className="mt-2 text-orange-400 font-medium">
            Web Development Intern
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Completed a structured web development internship focused on
            building responsive and interactive user interfaces using
            HTML, CSS, JavaScript, and React. Gained practical exposure
            to real-world frontend workflows and professional delivery
            standards.
          </p>

          <ul className="mt-6 list-disc list-inside text-gray-400 space-y-2">
            <li>Built responsive layouts and UI components</li>
            <li>Worked with React for reusable component design</li>
            <li>Applied UI/UX best practices and debugging techniques</li>
            <li>Improved collaboration and deadline-driven execution</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
