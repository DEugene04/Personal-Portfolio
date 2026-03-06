import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* LEFT SIDE - TEXT */}
          <div>
            <p className="text-sm tracking-widest uppercase text-primary mb-3 font-body">
              About
            </p>

            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              About Me
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed font-body">
              <p>
                As a third-year Information Systems and Management student at
                BINUS University, I am passionate about data and its
                problem-solving nature similar to like piecing together a
                puzzle, which I find both engaging and deeply satisfying. Beyond
                my academic foundation, I actively seek real-world experience by
                taking on managerial roles in organizations, allowing me to
                apply both technical and leadership skills. As I continue to
                deepen my expertise in data. Currently I am looking for an
                internship in the field of data science.
              </p>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed font-body mt-5">
              <a
                href="https://www.linkedin.com/in/dave-eugene/"
                target="_blank"
                className="text-primary flex gap-2"
              >
                {" "}
                Find me on LinkedIn{" "}
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full overflow-hidden border border-border">
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
