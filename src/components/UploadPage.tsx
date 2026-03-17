import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { SUBJECTS_BY_CLASS, ALL_SUBJECTS } from "@/data/mockResources";
import { useState } from "react";

interface UploadPageProps {
  onBack: () => void;
}

const UploadPage = ({ onBack }: UploadPageProps) => {
  const [selectedClass, setSelectedClass] = useState("");
  const subjects = selectedClass
    ? SUBJECTS_BY_CLASS[selectedClass] || ALL_SUBJECTS
    : ALL_SUBJECTS;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-4xl font-black mb-8 tracking-tight">
        SHARE YOUR <span className="text-primary">LEGACY.</span>
      </h2>

      <div className="glass-surface p-8">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Full Name
              </label>
              <input type="text" className="input-dark" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Graduation Year
              </label>
              <input type="text" className="input-dark" placeholder="2024" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Class
              </label>
              <select
                className="input-dark"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="" className="bg-card">Select</option>
                <option value="FY" className="bg-card">FY</option>
                <option value="SY" className="bg-card">SY</option>
                <option value="TY" className="bg-card">TY</option>
                <option value="Final Year" className="bg-card">Final Year</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Subject
              </label>
              <select className="input-dark">
                <option value="" className="bg-card">Select</option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="bg-card">{s}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Semester
              </label>
              <select className="input-dark">
                <option value="" className="bg-card">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={`Sem ${n}`} className="bg-card">Sem {n}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Resource Title
            </label>
            <input
              type="text"
              className="input-dark"
              placeholder="e.g. Unit 3 DBMS Notes"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Description
            </label>
            <textarea
              className="input-dark min-h-[100px] resize-none"
              placeholder="Brief description of the resource..."
            />
          </div>

          <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-secondary/50 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Upload className="text-secondary" />
            </div>
            <p className="font-bold">Drop your files here</p>
            <p className="text-sm text-muted-foreground">
              PDF, PPT, or ZIP (Max 50MB)
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 rounded-xl btn-gradient-cyan tracking-tight text-lg hover:brightness-110 transition-all"
          >
            Publish Resource
          </motion.button>
        </form>
      </div>

      <button
        onClick={onBack}
        className="mt-8 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
      >
        ← Back to Home
      </button>
    </motion.section>
  );
};

export default UploadPage;
