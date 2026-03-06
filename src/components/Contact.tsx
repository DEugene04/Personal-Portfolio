import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="container mx-auto max-w-xl">
        <p className="text-sm tracking-widest uppercase text-primary mb-3 font-body text-center">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10 text-center">
          Contact Me
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Name" className="bg-card border-border" />
            <Input
              placeholder="Email"
              type="email"
              className="bg-card border-border"
            />
          </div>
          <Input placeholder="Subject" className="bg-card border-border" />
          <Textarea
            placeholder="Message"
            rows={5}
            className="bg-card border-border resize-none"
          />
          <Button variant="hero" size="lg" className="w-full gap-2">
            Send Message <ArrowUpRight className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
