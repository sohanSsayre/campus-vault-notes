import { motion } from "framer-motion";
import { Star, Download } from "lucide-react";
import type { Resource } from "@/data/mockResources";

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
  >
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 0 25px rgba(124, 58, 237, 0.2)" }}
      className="glass-surface p-6 group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="neon-badge">{resource.type}</span>
        <div className="flex items-center gap-1 text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-mono">{resource.rating}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
        {resource.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        {resource.subject} • {resource.sem}
      </p>

      <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-black/40">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-purple to-hot-pink flex-shrink-0" />
        <div>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
            Uploaded By
          </p>
          <p className="text-sm font-medium font-mono">
            {resource.author}{" "}
            <span className="text-muted-foreground">({resource.year})</span>
          </p>
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold">
        <Download className="w-4 h-4" /> Download
      </button>
    </motion.div>
  </motion.div>
);

export default ResourceCard;
