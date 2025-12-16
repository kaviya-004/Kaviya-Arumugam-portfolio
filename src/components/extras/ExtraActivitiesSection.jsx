import { motion } from "framer-motion";

export default function ExtraActivitiesSection() {
  return (
    <section
      id="extras"
      className="relative py-32 bg-gradient-to-b from-[#020617] to-black"
    >
      {/* glow */}
      <motion.div
        className="absolute bottom-24 left-24 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-14 text-center">
          Extra Activities
        </h2>

        <div className="rounded-2xl bg-white/5 backdrop-blur-xl
                        border border-cyan-400/30 p-10
                        shadow-[0_0_45px_rgba(34,211,238,0.2)]">
          <h3 className="text-2xl font-semibold text-white">
            BCG Data Science Job Simulation
          </h3>

          <p className="mt-2 text-cyan-400 font-medium">
            Forage · Data Analytics & Machine Learning
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Completed a hands-on job simulation replicating real-world
            consulting scenarios. Focused on customer churn analysis,
            predictive modeling, and executive-level insight delivery.
          </p>

          <ul className="mt-6 list-disc list-inside text-gray-400 space-y-2">
            <li>Performed churn analysis using Python, Pandas, NumPy</li>
            <li>Built and evaluated a Random Forest model (50% recall)</li>
            <li>Created visual insights for business interpretation</li>
            <li>Delivered a concise executive summary</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
