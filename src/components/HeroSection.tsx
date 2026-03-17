import { motion } from "framer-motion";

interface HeroSectionProps {
  onUploadClick: () => void;
}

const HeroSection = ({ onUploadClick }: HeroSectionProps) => (
  <section className="py-20 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]"
    >
      YOUR SENIOR'S NOTES.
      <br />
      <span className="text-gradient-hero">YOUR SUCCESS.</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
    >
      The decentralized archive for academic excellence. Access curated
      resources from those who've already cleared the path.
    </motion.p>
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      whileTap={{ scale: 0.97 }}
      onClick={onUploadClick}
      className="px-8 py-4 rounded-full btn-gradient-purple tracking-tight text-lg hover:brightness-110 transition-all"
    >
      Contribute Now
    </motion.button>
  </section>
);

export default HeroSection;
