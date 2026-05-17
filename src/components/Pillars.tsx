import { motion } from "framer-motion";
import { Gauge, Zap, SearchCode } from "lucide-react";

const pillars = [
  {
    title: "Precision",
    description: "Systems engineered with rigor — from sensor to inference.",
    icon: Gauge,
  },
  {
    title: "Velocity",
    description: "Small team, modern tooling, shipping at startup pace.",
    icon: Zap,
  },
  {
    title: "Clarity",
    description: "Software that explains itself to the people who depend on it.",
    icon: SearchCode,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export function Pillars() {
  return (
    <section id="approach" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built on fundamentals.</h2>
          <p className="text-lg text-muted-foreground">
            We don't just assemble components. We engineer systems designed for high-stakes environments where performance, reliability, and insight are non-negotiable.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -m-6 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
