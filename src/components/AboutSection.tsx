import { motion } from "framer-motion";

const features = [
  {
    emoji: "📖",
    title: 'The "Holy Grail" Notes',
    desc: "Those DSA explanations that actually make sense.",
  },
  {
    emoji: "💻",
    title: "Code Snippets",
    desc: "Because we've all stared at a Java AWT error for too long.",
  },
  {
    emoji: "🛡️",
    title: "The Survival Guides",
    desc: "Past assignments and field project tips that save lives.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
};

const AboutSection = () => (
  <motion.section {...fadeUp} className="max-w-3xl mx-auto space-y-8">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center">
      About <span className="text-gradient-hero">CampusVault</span>
    </h2>

    {/* Section 1 — Big Heading */}
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-black tracking-tight">
        The Story Behind the Screen:{" "}
        <span className="text-gradient-hero">From Chaos to Code</span>
      </h3>
    </div>

    {/* Section 2 — Opening Story */}
    <div className="glass-surface p-6 md:p-8 border-l-4 border-l-secondary">
      <p className="text-muted-foreground leading-relaxed">
        We've all been there. It's 2:00 AM, the exam is tomorrow, and you're
        frantically scrolling through a WhatsApp group with 500+ unread
        messages, desperate to find that one legendary PDF. Between the Good
        Morning stickers and the random memes, our actual study materials were
        basically lost in the digital abyss.
      </p>
    </div>

    {/* Section 3 — Origin */}
    <div className="glass-surface p-6 md:p-8 space-y-3">
      <span className="neon-badge">💡 Enter: My Social Service Field Project</span>
      <p className="text-muted-foreground leading-relaxed">
        While brainstorming how to actually make a difference this semester, I
        realized the biggest service I could provide wasn't just a one-off task
        — it was a permanent fix for our department's resource hunt headache. I
        decided to trade the endless scrolling for a bit of coding.
      </p>
    </div>

    {/* Section 4 — What is this place? */}
    <div className="glass-surface p-6 md:p-8 space-y-6">
      <h4 className="text-xl md:text-2xl font-bold text-gradient-hero">
        What is this place?
      </h4>
      <p className="text-muted-foreground leading-relaxed">
        This isn't just another boring Google Drive folder. Think of this as the{" "}
        <span className="text-foreground font-semibold">
          Digital Home for our department's collective brainpower.
        </span>
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="glass-surface glass-surface-hover p-5 text-center space-y-2 transition-all duration-300"
          >
            <div className="text-3xl">{f.emoji}</div>
            <h5 className="font-bold text-foreground text-sm">{f.title}</h5>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Section 5 — Closing */}
    <div className="glass-surface p-6 md:p-8 border border-primary/30">
      <p className="text-muted-foreground leading-relaxed">
        <span className="text-foreground font-bold">
          Built by a student, for the squad.
        </span>{" "}
        I built this site to ensure that no one in our department has to waste
        time hunting for materials when they should be busy learning (or, let's
        be real, finally getting some sleep).
      </p>
    </div>

    {/* Section 6 — Final Banner */}
    <div className="text-center space-y-2 py-4">
      <p className="text-lg md:text-xl font-black text-gradient-hero">
        This started as a college assignment, but it's staying as a community
        resource.
      </p>
      <p className="text-lg md:text-xl font-black text-gradient-hero">
        Let's stop the scroll and start the score. 🚀
      </p>
    </div>
  </motion.section>
);

export default AboutSection;
