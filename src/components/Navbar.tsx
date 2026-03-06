import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const navLinks = ["Projects", "Skills", "About"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="font-heading text-lg font-semibold tracking-tight">
          <span className="text-primary">Dave</span>
          <span className="text-foreground">Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
