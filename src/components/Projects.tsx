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
    title: "Data Visualization Final Semester Project",
    description:
      "Developed a Tableau data visualization project analyzing GDP growth trends by conducting exploratory data analysis (EDA) to identify anomalies and economic downturns, including major declines in 1998 and 2015, and built time-series dashboards to support economic trend analysis and insight generation.",
    tags: ["Tableau", "Ms Excel", "Data Visualization"],
    category: "Data",
    link: "https://github.com/DEugene04/Tableau-UAS-Davis.git",
    images: ["/Davis-FullDashboard.png"],
  },
  {
    title: "RYPaws SQL Project",
    description:
      "Designed and implemented a relational database schema for a pet shop management system to digitize manual sales and purchasing records, developing SQL DDL and DML queries for table creation and data management while simulating database transactions to ensure data consistency and reliable operations.",
    tags: ["SQL Server Management Studio", "MySQL"],
    category: "Data",
    link: "https://github.com/DEugene04/RYPaws-SQL.git",
    images: ["/RYPaws-ERD.png"],
  },
  {
    title: "Tjongklak Batik",
    description:
      "An e-commerce platform for selling batik products online, featuring a modern interface and increasing purchasing experience.",
    tags: ["React", "TypeScript", "API", "Tailwind CSS"],
    category: "Software Development",
    link: "https://tjongklakbatik.com",
    images: ["/Tjongklak_Batik(1).png", "/Tjongklak_Batik (2).png"],
  },
  {
    title: "Registration Website",
    description:
      "Designed and implemented a MySQL database schema supporting 2,200+ registrants, optimizing tables for user roles, accounts, and transaction records. Ensured accurate data capture, validation, and retrieval for registration and payment workflows, while processing and reconciling over 500 payment records using data verification logic to maintain financial integrity. Led a team of three to deliver a full-stack registration platform within three weeks, collaborating across front-end and back-end systems to align data requirements and ensure reliable system functionality.",
    tags: ["React", "TypeScript", "API", "Tailwind CSS"],
    category: "Software Development",
    link: "https://github.com/DEugene04/Launching-BOS.git",
    images: [
      "/BNCC_Opening_Season(1).png",
      "/BNCC_Opening_Season(2).png",
      "/BNCC_Opening_Season(3).png",
    ],
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
      "Built an AI-powered chatbot using Retrieval-Augmented Generation (RAG) that retrieves relevant knowledge from a vector database to generate accurate, context-aware responses. Developed an automated agent that monitors a Google Drive folder, processes newly uploaded files, chunks the content, and stores embeddings in a Pinecone vector database, enabling efficient and continuously updated RAG-based question answering.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <Card
              key={i}
              className="group bg-card border-border hover:border-primary/30 transition-colors cursor-pointer w-full max-w-3xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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

                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
