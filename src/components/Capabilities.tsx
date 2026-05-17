import { motion } from "framer-motion";
import { Layers, Network, Cpu } from "lucide-react";

const capabilities = [
  {
    title: "Applied Intelligence",
    description: "Integrating ML models and inference engines into production workflows, turning raw data streams into actionable intelligence.",
    icon: Network,
  },
  {
    title: "Automated Systems",
    description: "Designing closed-loop systems that orchestrate complex processes with minimal human intervention but maximum observability.",
    icon: Cpu,
  },
  {
    title: "Engineering Motion",
    description: "Building interfaces and APIs that handle high-frequency telemetry, spatial data, and time-series metrics seamlessly.",
    icon: Layers,
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Capabilities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We bridge the gap between deep technical complexity and fluid user experience. Our expertise lies in making the hard things look easy.
              </p>
              
              <div className="w-full h-64 md:h-80 rounded-2xl bg-background border border-border flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5" />
                <svg className="w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary animate-[dash_5s_linear_infinite]" strokeDasharray="5,5" />
                  <path d="M0,60 Q35,90 60,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-blue-500 animate-[dash_7s_linear_infinite_reverse]" strokeDasharray="3,3" />
                  <path d="M0,40 Q15,10 40,40 T100,40" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-purple-500 animate-[dash_4s_linear_infinite]" strokeDasharray="2,4" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-12">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-primary mt-1">
                  <cap.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
