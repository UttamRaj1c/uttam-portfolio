export default function Footer() {
    return (
      <footer className="border-t border-cyan-500/20 bg-[#050505] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <h2 className="text-cyan-400 text-3xl font-black neon-text">
            UTTAM
          </h2>
  
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} UTTAM. All Rights
            Reserved.
          </p>
  
          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>
  
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }