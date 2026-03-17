import { motion } from "framer-motion";

const AboutSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    className="max-w-3xl mx-auto text-center"
  >
    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
      ABOUT <span className="text-gradient-hero">CAMPUSVAULT</span>
    </h2>
    <div className="glass-surface p-8 md:p-12 text-left space-y-4 text-muted-foreground leading-relaxed">
      <p>
        CampusVault is a student-driven platform built to bridge the knowledge gap between batches. We believe that academic resources shouldn't disappear when a senior graduates — they should be archived, curated, and passed forward.
      </p>
      <p>
        From handwritten notes to lab manuals, presentation slides to formula sheets — every resource shared here helps the next generation navigate their academics with confidence.
      </p>
      <p className="text-foreground font-bold">
        Built by students. For students. Forever free.
      </p>
    </div>
  </motion.section>
);

export default AboutSection;
