const experienceData = [
    {
      company: "CI Infotech Pvt. Ltd.",
      role: "Senior Engineer",
      duration: "Sep 2025 - Dec 2025",
      description:
        "Developed Laravel-based web applications, backend systems, form processing, CMS modules and database management.",
    },
    {
      company: "Bitloom Infoserv Pvt. Ltd.",
      role: "PHP Developer",
      duration: "Feb 2025 - Aug 2025",
      description:
        "Worked on CRM applications using CodeIgniter, dashboards, reports, validations and optimized database systems.",
    },
    {
      company: "Webeedream Technologies Pvt. Ltd.",
      role: "Software Developer",
      duration: "Oct 2023 - Nov 2024",
      description:
        "Built Laravel and WordPress web applications, educational systems, business websites and admin dashboards.",
    },
  ];
  
  export default function Experience() {
    return (
      <section
        id="experience"
        className="py-28 px-6 bg-black relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full"></div>
  
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-cyan-400 uppercase tracking-[5px]">
              Experience
            </span>
  
            <h2 className="text-white text-5xl font-black mt-4">
              Work Experience
            </h2>
          </div>
  
          <div className="relative border-l border-cyan-500/30 ml-4">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="mb-12 ml-8 relative"
              >
                {/* Dot */}
                <span className="absolute -left-[42px] top-4 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></span>
  
                <div className="timeline-card">
                  <h3 className="text-cyan-400 text-2xl font-bold">
                    {item.role}
                  </h3>
  
                  <h4 className="text-white text-xl font-semibold mt-2">
                    {item.company}
                  </h4>
  
                  <p className="text-gray-400 mt-2">
                    {item.duration}
                  </p>
  
                  <p className="text-gray-300 mt-5 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }