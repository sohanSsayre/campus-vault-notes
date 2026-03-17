import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TAGLINES = [
  "Your Senior's Notes. Your Success.",
  "Your Senior's Help. Your Success.",
  "Your Senior's Guide. Your Success.",
  "Your Senior's Experience. Your Success.",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 text-center">
      <div className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] h-[1.8em] sm:h-[1.8em] md:h-[1.8em] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {TAGLINES[index].split(". ").map((part, i) =>
              i === 1 ? (
                <span key={i} className="text-gradient-hero">{part}</span>
              ) : (
                <span key={i}>
                  {part}.
                  <br />
                </span>
              )
            )}
          </motion.h1>
        </AnimatePresence>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
      >
        The decentralized archive for academic excellence. Access curated
        resources from those who've already cleared the path.
      </motion.p>
    </section>
  );
};

export default HeroSection;
