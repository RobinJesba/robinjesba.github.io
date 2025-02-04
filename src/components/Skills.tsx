const Skills = () => {
  const skills = ["TypeScript", "React", "Node.js", "UI/UX", "AWS"];

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-white hover-effect"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;