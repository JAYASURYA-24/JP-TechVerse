import AnimatedSection from '../components/ui/AnimatedSection';



export default function About() {
  return (
    <section id="about" className="section-padding relative section-alt" aria-labelledby="about-heading">
      <div className="section-container relative z-10">

        {/* ── Intro ── */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="section-label mb-5 inline-flex">About Us</span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6"
              style={{ color: 'var(--text-primary)' }}>
              We Build Digital Experiences <br /><span className="gradient-text">That Matter</span>
            </h2>
            <p className="leading-relaxed mb-4 max-w-4xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              We are a growing startup focused on helping businesses turn ideas into powerful digital products.
              From early-stage startups to small businesses, our goal is simple - to make high-quality technology
              and design accessible, affordable, and impactful.
            </p>
            <p className="leading-relaxed max-w-4xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our team specializes in crafting modern mobile applications, scalable web platforms, and visually
              compelling designs that not only look great but also deliver real results. We combine creativity
              with technology to build solutions that are fast, user-friendly, and built for growth.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Mission & Vision Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Our Mission', text: 'To empower startups and businesses with affordable, high-quality digital solutions that drive growth and innovation.' },
            { label: 'Our Vision', text: 'To become a trusted technology and design partner for businesses looking to build and scale in the digital world.' },
          ].map(({ label, text }) => (
            <AnimatedSection key={label}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  <h3 className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'var(--accent)' }}>{label}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
