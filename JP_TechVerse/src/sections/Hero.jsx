import AnimatedSection from '../components/ui/AnimatedSection';

/* ══════════════════════════════════════════════════════
   DEVICE MOCKUP — Laptop + Phone (CSS-only, like reference)
══════════════════════════════════════════════════════ */
const DeviceMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center">

    {/* ── Laptop ─────────────────────────────────────── */}
    <div className="relative animate-float" style={{ animationDelay: '0s' }}>
      {/* Screen */}
      <div className="relative w-[420px] rounded-2xl overflow-hidden border border-blue-500/30
        bg-[#0d1440] shadow-[0_0_60px_rgba(37,99,235,0.3)]">
        {/* Mac-style chrome bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#080d2a] border-b border-blue-500/20">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-4 h-4 rounded bg-[#1a2460] flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-blue-400/40" />
            <span className="text-blue-300/60 text-[8px]">jptechverse.com</span>
          </div>
          <div className="w-14 h-4 rounded bg-blue-600/30 flex items-center justify-center">
            <span className="text-blue-300 text-[7px] font-semibold">Get In Touch</span>
          </div>
        </div>

        {/* Screen content */}
        <div className="p-5 space-y-4">
          {/* Navbar inside screen */}
          <div className="flex items-center justify-between pb-3 border-b border-blue-500/10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-[6px] font-bold">JP</span>
              </div>
              <span className="text-[8px] font-bold text-white">JP TechVerse</span>
            </div>
            <div className="flex items-center gap-3">
              {['Home','Services','Projects','Contact'].map(n => (
                <span key={n} className="text-[7px] text-blue-200/50">{n}</span>
              ))}
            </div>
          </div>

          {/* Hero text inside screen */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-white leading-tight">
              We Build Scalable <span className="text-blue-400">Apps & Websites</span>
            </p>
            <p className="text-[8px] text-blue-200/50">Clean Code. Modern Design. Better Performance.</p>
            <div className="w-28 h-5 rounded-lg bg-blue-600 flex items-center justify-center gap-1 mt-1">
              <span className="text-white text-[7px] font-semibold">Let's Build Together</span>
              <span className="text-white text-[8px]"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg></span>
            </div>
          </div>

          {/* Service icons row */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { icon: '📱', label: 'App Development', sub: 'Cross platform mobile apps that scale.', iconSize: 'text-base' },
              { icon: '🌐', label: 'Web Development', sub: 'Modern websites that convert.', iconSize: 'text-base' },
              { icon: '✏️', label: 'Branding & Design', sub: 'Logos, visuals & brand identity.', iconSize: 'text-xs mb-2 mt-1' },
            ].map(({ icon, label, sub, iconSize }) => (
              <div key={label} className="p-2 rounded-xl bg-[#080d2a] border border-blue-500/10 space-y-1">
                <span className={`${iconSize} block`}>{icon}</span>
                <p className="text-[7px] font-semibold text-white leading-tight">{label}</p>
                <p className="text-[6px] text-blue-200/40 leading-tight">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="w-[460px] h-3 bg-[#0d1440] rounded-b-xl border-x border-b border-blue-500/20
        mx-auto shadow-[0_8px_32px_rgba(37,99,235,0.2)]" />
      <div className="w-[500px] h-1.5 bg-[#080d2a] rounded-b-2xl border-x border-b border-blue-500/10 mx-auto" />
    </div>

    {/* ── Phone (overlapping right) ───────────────────── */}
    <div className="absolute right-10 -bottom-8 w-28 animate-float" style={{ animationDelay: '1.5s' }}>
      <div className="rounded-2xl overflow-hidden border border-blue-400/30 bg-[#080d2a]
        shadow-[0_0_40px_rgba(37,99,235,0.35)]">
        {/* Phone notch */}
        <div className="flex justify-center py-2 bg-[#0d1440] border-b border-blue-500/10">
          <div className="w-10 h-1.5 rounded-full bg-blue-500/20" />
        </div>
        {/* Phone content */}
        <div className="p-2.5 space-y-2">
          <p className="text-[9px] font-bold text-white leading-tight">
            Your Idea.<br />
            <span className="text-blue-400">Our Code.</span><br />
            <span className="text-blue-300">Real Impact.</span>
          </p>
          <p className="text-[7px] text-blue-200/40 leading-tight">Let's build something amazing together.</p>
          <div className="w-full h-5 rounded-lg bg-blue-600 flex items-center justify-center gap-1 mt-1">
            <span className="text-white text-[7px] font-semibold">Get Started</span>
            <span className="text-white text-[8px]"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg></span>
          </div>
          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-1 pt-1">
            {[['5+','Projects'],['10+','Clients'],['1+','Year']].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-[8px] font-black text-blue-400">{n}</p>
                <p className="text-[6px] text-blue-200/40">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ── Floating badge: Fast Delivery ───────────────── */}
    <div className="absolute -top-6 right-16 animate-float" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-blue-400/25
        bg-[#0d1440]/90 backdrop-blur-sm shadow-[0_8px_24px_rgba(37,99,235,0.25)] w-44">
        <div className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <p className="text-white text-[10px] font-bold leading-none">Fast Delivery</p>
          <p className="text-blue-200/50 text-[8px] leading-tight mt-0.5">We value your time<br />as much as ours.</p>
        </div>
      </div>
    </div>

    {/* ── Floating badge: Quality First ───────────────── */}
    <div className="absolute top-6 -left-16 animate-float-slow" style={{ animationDelay: '1s' }}>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-blue-400/25
        bg-[#0d1440]/90 backdrop-blur-sm shadow-[0_8px_24px_rgba(37,99,235,0.25)] w-40">
        <div className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-white text-[10px] font-bold leading-none">Quality First</p>
          <p className="text-blue-200/50 text-[8px] leading-tight mt-0.5">Clean, secure &<br />reliable solutions.</p>
        </div>
      </div>
    </div>

    {/* ── Floating badge: Startup Friendly ────────────── */}
    <div className="absolute -bottom-2 -left-20 animate-float-slow" style={{ animationDelay: '2s' }}>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-blue-400/25
        bg-[#0d1440]/90 backdrop-blur-sm shadow-[0_8px_24px_rgba(37,99,235,0.25)] w-44">
        <div className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-base">
          💬
        </div>
        <div>
          <p className="text-white text-[10px] font-bold leading-none">Startup Friendly</p>
          <p className="text-blue-200/50 text-[8px] leading-tight mt-0.5">Flexible pricing and<br />personal support.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Stat pill ───────────────────────────────────────── */
const StatItem = ({ icon, number, label }) => (
  <div className="flex items-center gap-2.5">
    <span className="text-blue-400 flex-shrink-0">{icon}</span>
    <div>
      <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: 'Sora, system-ui' }}>
        {number}
      </p>
      <p className="text-white/45 text-xs">{label}</p>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════
   HERO SECTION
══════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex flex-col"
      aria-label="Hero section"
    >
      {/* wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none"
          className="w-full block" style={{ height: '56px' }}>
          <path d="M0 56L0 28Q360 0 720 28Q1080 56 1440 14L1440 56Z"
            style={{ fill: 'var(--bg-secondary)' }} />
        </svg>
      </div>

      {/* Navbar spacing + content */}
      <div className="flex-1 flex items-center pt-24 pb-20 relative z-10">
        <div className="section-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT — Text ─────────────────────────────── */}
            <div>
              {/* Badge */}
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7
                  border border-blue-500/30 bg-blue-600/10 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-blue-300 text-xs font-semibold tracking-wide">New Startup. Big Vision.</span>
                </div>
              </AnimatedSection>

              {/* H1 */}
              <AnimatedSection delay={80}>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] text-white mb-6"
                  style={{ fontFamily: 'Sora, system-ui' }}>
                  Building Digital
                  <br className="hidden sm:block" /> Solutions That
                  <br />
                  <span className="highlight-text">Drive Growth</span>
                </h1>
              </AnimatedSection>

              {/* Sub-text */}
              <AnimatedSection delay={160}>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
                  style={{ fontFamily: 'Inter, system-ui' }}>
                  We're a passionate team of developers and designers helping startups and businesses turn ideas
                  into powerful{' '}
                  <a href="#services" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    apps and websites.
                  </a>
                </p>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection delay={240}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="#contact"
                    onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="btn-primary text-base px-8 py-4 rounded-2xl justify-center sm:justify-start">
                    Start Your Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="#projects"
                    onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="btn-hero-outline text-base px-8 py-4 rounded-2xl justify-center sm:justify-start">
                    View Our Work
                  </a>
                </div>
              </AnimatedSection>

              {/* Stats */}
              <AnimatedSection delay={320}>
                <div className="flex flex-wrap items-center gap-8 mb-8 pb-8 border-b border-white/10">
                  <StatItem
                    number="10+"
                    label="Projects Completed"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    }
                  />
                  <StatItem
                    number="7+"
                    label="Happy Clients"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                  />
                  <StatItem
                    number="1+"
                    label="Years In Progress"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    }
                  />
                </div>
              </AnimatedSection>

              {/* Bottom tagline */}
              <AnimatedSection delay={400}>
                <p className="text-white/40 text-sm" style={{ fontFamily: 'Inter, system-ui' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500 inline mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Focused on{' '}
                  <span className="text-blue-400 font-medium">Quality</span>.
                  {' '}Committed to{' '}
                  <span className="text-blue-400 font-medium">Growth</span>.
                </p>
              </AnimatedSection>
            </div>

            {/* ── RIGHT — Device Mockup ────────────────────── */}
            <AnimatedSection animation="fade-right" className="relative hidden lg:flex items-center justify-center min-h-[520px]">
              <DeviceMockup />
            </AnimatedSection>

          </div>
        </div>
      </div>

    </section>
  );
}
