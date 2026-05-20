const projects = [
    {
      title: "FORE School of Management",
      tech: "Laravel",
      desc: "Built dynamic academic modules, admin operations and CMS-based features.",
    },
    {
      title: "EK Microbook CRM",
      tech: "CodeIgniter",
      desc: "Lead management, customer records, reporting dashboard and validations.",
    },
    {
      title: "School Management System",
      tech: "Laravel",
      desc: "Student, attendance, teacher and fee management system.",
    },
    {
      title: "Microfinance Loan System",
      tech: "Laravel",
      desc: "Loan workflows, EMI calculation and repayment tracking.",
    },
    {
      title: "MobileGuru",
      tech: "WordPress",
      desc: "Custom theme and website development.",
    },
    {
      title: "Camnex",
      tech: "WordPress",
      desc: "Business website customization and optimization.",
    },
  ];
  
  export default function Projects() {
    return (
      <section
        id="projects"
        className="py-28 px-6 bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 uppercase tracking-[5px]">
              Projects
            </span>
  
            <h2 className="text-white text-5xl font-black mt-4">
              Featured Projects
            </h2>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
              >
                <span className="text-cyan-400 font-semibold">
                  {project.tech}
                </span>
  
                <h3 className="text-white text-2xl font-bold mt-3">
                  {project.title}
                </h3>
  
                <p className="text-gray-400 mt-5 leading-7">
                  {project.desc}
                </p>
  
                <button className="mt-8 text-cyan-400 hover:text-white transition">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }