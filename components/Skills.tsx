const skills = [
    "PHP",
    "Laravel",
    "CodeIgniter",
    "WordPress",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "AJAX",
    "MySQL",
    "REST APIs",
    "Git",
    "jQuery",
  ];
  
  export default function Skills() {
    return (
      <section
        id="skills"
        className="py-28 bg-[#050505] px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 uppercase tracking-[5px]">
              Skills
            </span>
  
            <h2 className="text-white text-5xl font-black mt-4">
              Technical Skills
            </h2>
  
            <p className="text-gray-400 mt-5 text-lg">
              Technologies and tools I work with
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3 className="text-cyan-400 text-2xl font-bold">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }