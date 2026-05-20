export default function About() {
    return (
      <section
        id="about"
        className="relative py-28 px-6 bg-black overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute left-0 top-10 w-80 h-80 bg-cyan-500/20 blur-[140px] rounded-full"></div>
  
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
                About Me
              </span>
  
              <h2 className="text-white text-4xl md:text-6xl font-black mt-4 leading-tight">
                Full Stack Web Developer
              </h2>
  
              <p className="text-gray-400 text-lg leading-8 mt-8">
                I’m <span className="text-cyan-400">UTTAM</span>, a
                passionate Full Stack Web Developer with experience
                in building scalable applications using PHP,
                Laravel, CodeIgniter, WordPress, APIs and MySQL.
              </p>
  
              <p className="text-gray-400 text-lg leading-8 mt-6">
                I specialize in CRM systems, admin dashboards,
                business websites, educational portals and
                performance-driven web applications with clean and
                maintainable code.
              </p>
  
              {/* Stats */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="skill-card">
                  <h3 className="text-4xl font-black text-cyan-400">
                    2 Year
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Years Experience
                  </p>
                </div>
  
                <div className="skill-card">
                  <h3 className="text-4xl font-black text-cyan-400">
                    20+
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Completed Projects
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right */}
            <div className="relative">
              <div className="about-card">
                <h3 className="text-white text-3xl font-bold mb-6">
                  Quick Info
                </h3>
  
                <div className="space-y-5 text-lg">
                  <div className="info-row">
                    <span>Name</span>
                    <strong>UTTAM</strong>
                  </div>
  
                  <div className="info-row">
                    <span>Role</span>
                    <strong>Full Stack Web Developer</strong>
                  </div>
  
                  <div className="info-row">
                    <span>Experience</span>
                    <strong>1.9+ Years</strong>
                  </div>
  
                  <div className="info-row">
                    <span>Tech</span>
                    <strong>
                      PHP, Laravel, CI, WordPress
                    </strong>
                  </div>
  
                  <div className="info-row">
                    <span>Location</span>
                    <strong>Lucknow, India</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }