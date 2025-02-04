import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="space-y-12 p-6">
        <Hero />
        <About />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;