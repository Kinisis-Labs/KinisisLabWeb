import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Abstract network visualization" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              BUILD · DELIVER · SCALE
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[1.1]">
              Engineering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">in Motion.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Kinisis Labs designs and delivers apps at the intersection of engineering, automation, and applied intelligence — turning movement and signal into decisions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12" asChild>
                <a href="#contact">Engage Us</a>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-white/5 font-medium px-8 h-12" asChild>
                <a href="#approach">Explore Approach</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:col-span-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square"
          >
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border border-primary/5 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="w-12 h-12 bg-primary rounded-full blur-md" />
              <div className="w-4 h-4 bg-white rounded-full absolute shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
