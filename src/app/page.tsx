import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
