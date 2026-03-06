import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "NLP Sentiment Engine",
    description:
      "Real-time sentiment analysis pipeline processing customer reviews across multiple platforms.",
    tags: ["NLP", "TensorFlow", "FastAPI"],
    category: "Data",
    link: "https://github.com/DEugene04/Review-Sentiment-NLP.git",
    images: ["/NLP-Review(1).png", "/NLP-Review(2).png"],
  },
  {
    title: "Data Analysis Case Studies",
    description:
      "Performed exploratory data analysis on diverse datasets including crime statistics, housing listings, education performance, movie releases, and Nobel Prize records. Applied data cleaning, feature engineering, statistical analysis, and visualization to uncover trends, patterns, and key insights.",
    tags: ["Python", "Pandas", "EDA", "Data Cleaning", "Statistics"],
    category: "Data",
    link: "#",
    images: [
      "/Analyzing Crimes (1).png",
      "/Analyzing Crimes (2).png",
      "/AirBnb (1).png",
      "/AirBnb (2).png",
      "/Netflix (1).png",
      "/Netflix (2).png",
      "/Noble Winner (1).png",
      "/Noble Winner (2).png",
      "/NYC School (1).png",
      "/NYC School (2).png",
      "/Preparing Customer Data (1).png",
      "/Preparing Customer Data (2).png",
    ],
  },
  {
    title: "Tjongklak Batik",
    description:
      "An e-commerce platform for selling batik products online, featuring a modern interface and increasing purchasing experience.",
    tags: ["React", "TypeScript", "API"],
    category: "Software Development",
    link: "https://tjongklakbatik.com",
    images: ["/Tjongklak_Batik(1).png", "/Tjongklak_Batik (2).png"],
  },
  {
    title: "Telegram AI Agent",
    description:
      "An AI-powered Telegram agent that enables users to seamlessly manage and monitor gmail, google calendar, and social media (X) through a single chat interface. It intelligently processes  messages, understands user’s intent, and performs tasks like scheduling events, reading emails, and posting to platforms",
    tags: ["N8N", "Prompt Engineering"],
    category: "Automation",
    link: "#",
    images: [
      "/N8N Telegram Agent (Full).png",
      "/N8N Telegram Agent (Gmail).png",
      "/N8N Telegram Agent (Google Calendar).png",
      "/N8N Telegram Agent (Retrieve Contact).png",
      "/N8N Telegram Agent (Search Engine).png",
      "/N8N Telegram Agent (X Post).png",
    ],
  },
  {
    title: "RAG AI Agent",
    description:
      "An AI-powered Telegram agent that enables users to seamlessly manage and monitor gmail, google calendar, and social media (X) through a single chat interface. It intelligently processes  messages, understands user’s intent, and performs tasks like scheduling events, reading emails, and posting to platforms",
    tags: ["N8N", "Prompt Engineering", "Retrieval-Augmented Generation"],
    category: "Automation",
    link: "#",
    images: ["/N8N RAG Agent (Full).png", "/N8N RAG Agent (RAG Embedding).png"],
  },
];

const Projects = () => {
  const categories = ["Data", "Software Development", "Automation"];

  const [selectedCategory, setSelectedCategory] = useState("Data");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  return (
    <section id="projects" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm tracking-widest uppercase text-primary mb-3 font-body">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">
          Featured Projects
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors
        ${
          selectedCategory === cat
            ? "bg-primary text-primary-foreground border-primary"
            : "border-border text-muted-foreground hover:border-primary"
        }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          {filteredProjects.map((project, i) => (
            <Card
              key={i}
              className="group bg-card border-border hover:border-primary/30 transition-colors cursor-pointer w-full max-w-3xl"
            >
              <CardContent className="p-6">
                {/* IMAGE CAROUSEL PLACEHOLDER */}
                {project.images?.length ? (
                  <div className="mb-5">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((src, idx) => (
                          <CarouselItem key={idx}>
                            <div className="w-full overflow-hidden rounded-lg border border-border">
                              <img
                                src={src}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                className="h-56 w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* Keep subtle controls; doesn’t change your theme */}
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                ) : null}

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold font-heading text-card-foreground">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
