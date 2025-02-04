import { Github, Linkedin, Twitter } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover-effect">
        <Github className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-effect">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-effect">
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;