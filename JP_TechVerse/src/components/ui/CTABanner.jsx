import AnimatedSection from './AnimatedSection';

export default function CTABanner() {
  return (
    <section className="pb-40 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-cyan) 100%)' }}>
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} aria-hidden="true" />
            {/* Glow orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 lg:p-16">
              <div className="text-center md:text-left">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Let's turn your ideas into a scalable digital product - fast, affordable, and beautiful.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base
                  bg-white text-[#2563eb] shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                  hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                  onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Start a Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base
                  text-white border-2 border-white/40 bg-white/10 backdrop-blur-sm
                  hover:bg-white/20 hover:border-white/70 transition-all duration-300"
                  onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
