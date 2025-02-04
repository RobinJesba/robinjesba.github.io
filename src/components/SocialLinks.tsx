import { Github, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
      <a href="https://github.com/RobinJesba" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
        <Github className="w-6 h-6" />
      </a>
      <a href="www.linkedin.com/in/robin-jesba" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;