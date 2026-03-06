import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-primary mb-6 font-body">
          Data & AI
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-heading">
          Every Dataset
          <br />
          Hides A Problem
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 font-body">
          I believe that recognizing the problem solves 50% of the problem.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="gap-2"
          >
            My Projects <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>Data Analyst</span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span>Data Scientist</span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span>AI Engineer</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
