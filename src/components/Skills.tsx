const Skills = () => {
  const skills = ["TypeScript", "React", "Node.js", "UI/UX", "AWS"];

  return (
    <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-white transition-opacity duration-300 hover:opacity-70"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;