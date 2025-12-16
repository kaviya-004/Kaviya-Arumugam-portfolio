import { motion } from "framer-motion";

const name = "Kaviya Arumugam".split("");

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-black"
    >
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(270deg, #00f5d4, #f72585, #7209b7)",
          backgroundSize: "600% 600%",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        
        {/* Letter animation */}
        <div className="flex text-5xl md:text-7xl font-bold text-white">
          {name.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="mr-[2px]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-300"
        >
          Java Developer • AI Engineer • Full-Stack Builder
        </motion.p>
      </div>
    </section>
  );
}
