import { Home, Zap, TrendingDown, Monitor } from "lucide-react";

const skills = [
  {
    icon: Home,
    title: "Maximum Security",
    description:
      "Your assets are protected with cutting-edge security protocols.",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Execute data analysis in real-time, without delays.",
  },
  {
    icon: TrendingDown,
    title: "Optimized Models",
    description: "Benefit from highly tuned ML models for accurate results.",
  },
  {
    icon: Monitor,
    title: "Clean Interfaces",
    description:
      "An elegant, intuitive design that's easy to use for all stakeholders.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-20 font-body leading-relaxed">
          Simplicity, performance, and security — empowering you to navigate the
          digital world with confidence and agility.
        </p>

        <p className="text-sm tracking-widest uppercase text-primary mb-3">
          Why Work With Me?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          What I Bring
        </h2>
        <p className="text-sm text-muted-foreground mb-12">
          Benefits designed to provide a seamless and effective experience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-6 text-left hover:border-primary/30 transition-colors"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <skill.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold font-heading text-card-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
