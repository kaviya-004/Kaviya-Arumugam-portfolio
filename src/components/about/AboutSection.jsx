import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#050b1e] overflow-hidden"
    >
      
      {/* floating background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Computer Science Engineer with strong expertise in Java,
          AI/ML, and scalable full-stack systems. Focused on clean
          architecture, performance, and real-world impact.
        </p>
      </motion.div>
    </section>
  );
}
