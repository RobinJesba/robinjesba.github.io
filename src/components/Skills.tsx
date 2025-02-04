import { Code2, Server, FileCode, Laptop, Code, Cloud } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <Code2 size={24} /> },
    { name: "SpringBoot", icon: <Server size={24} /> },
    { name: "TypeScript", icon: <FileCode size={24} /> },
    { name: "Node.js", icon: <Laptop size={24} /> },
    { name: "React", icon: <Code size={24} /> },
    { name: "GCP", icon: <Cloud size={24} /> },
  ];

  return (
    <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 p-4 border border-white transition-opacity duration-300 hover:opacity-70"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;