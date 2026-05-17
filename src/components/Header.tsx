import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Logo } from "./Logo";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 19, 28, 0)", "rgba(17, 19, 28, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(38, 41, 61, 0)", "rgba(38, 41, 61, 1)"]
  );

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{ backgroundColor, backdropFilter, borderColor }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#approach" className="text-muted-foreground hover:text-primary transition-colors">Approach</a>
          <a href="#capabilities" className="text-muted-foreground hover:text-primary transition-colors">Capabilities</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden sm:inline-flex border-primary/30 hover:border-primary/60 hover:bg-primary/10">
            <a href="#contact">Start a Conversation</a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
