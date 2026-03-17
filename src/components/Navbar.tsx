import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const NAV_ITEMS = ["Home", "Browse", "About"];

const Navbar = ({ currentView, onNavigate }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl font-black italic tracking-tighter text-gradient-logo"
        >
          CAMPUSVAULT 🎓
        </button>

        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`transition-colors duration-300 ${
                currentView === item.toLowerCase()
                  ? "text-cyan-focus"
                  : "text-muted-foreground hover:text-cyan-focus"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item.toLowerCase());
                    setMobileOpen(false);
                  }}
                  className="text-sm font-medium uppercase tracking-widest text-left text-muted-foreground hover:text-cyan-focus transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
