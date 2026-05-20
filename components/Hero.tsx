export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6">
        {/* Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[140px] opacity-20"></div>
  
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full blur-[140px] opacity-20"></div>
  
        <div className="relative z-10 text-center max-w-5xl">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-5 text-sm">
            Full Stack Web Developer
          </p>
  
          <h1 className="text-white font-black text-5xl md:text-7xl leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-cyan-400 neon-text">
              UTTAM
            </span>
          </h1>
  
          <h2 className="text-gray-300 text-lg md:text-2xl leading-relaxed mb-8">
            Building modern, scalable and high-performance web
            applications with PHP, Laravel, CodeIgniter,
            WordPress & APIs.
          </h2>
  
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#projects" className="neon-btn">
              View Projects
            </a>
  
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  }