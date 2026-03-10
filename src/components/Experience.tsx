import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  location?: string;
  description: string[];
  skills?: string[];
  link?: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Data Analyst",
    org: "PT Ousean Global Digital",
    dates: "Sep 2025 - Dec 2025",
    location: "Indonesia",
    description: [
      "Performed exploratory data analysis (EDA) on qualitative interview data using Python to identify insights",
      "Applied text-mining techniques using Excel to structure and clean the interview dataset",
      "Convert qualitative responses to quantitative format through binary encoding to streamline downstream machine learning workflows.",
    ],
    skills: ["Python", "EDA", "Excel", "Data Analysis"],
    link: "#",
  },
  {
    role: "Campus President",
    org: "BNCC (Bina Nusantara Computer Club)",
    dates: "Oct 2024 — Oct 2025",
    location: "Indonesia",
    description: [
      "Implemented 3 strategic knowledge management programs, enhancing skill development for 72 activists.",
      "Supervises 112 members (40 core leaders & 72 activists), ensuring smooth organizational operations.",
      "Led the successful execution of a large-scale leadership event, attended by hundreds of activists from Bandung, Alam Sutera, Kemanggisan, and Malang, strengthening leadership capabilities across campuses.",
      "Acts as the primary liaison between BNCC and the university, ensuring compliance with institutional policies and fostering strong organizational-university relations.",
    ],
    skills: [
      "Leadership",
      "Communication",
      "People Management",
      "Strategic Planning",
      "Problem Solving",
    ],
    link: "#",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm tracking-widest uppercase text-primary mb-3 font-body">
          Experience
        </p>

        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">
          Work & Organizations
        </h2>

        {/* Items */}
        <div className="space-y-5">
          {experiences.map((item, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-card-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {item.org}
                      {item.location ? ` • ${item.location}` : ""}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-body">
                    {item.dates}
                  </p>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed font-body">
                  {item.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                {item.skills?.length ? (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
