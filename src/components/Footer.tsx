import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-8 w-auto mb-6" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Kinisis Labs designs and delivers apps at the intersection of engineering, automation, and applied intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Capabilities</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Applied Intelligence</li>
              <li>Automated Systems</li>
              <li>Data Engineering</li>
              <li>Interface Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kinisis Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
