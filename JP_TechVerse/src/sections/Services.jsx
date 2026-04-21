import AnimatedSection from '../components/ui/AnimatedSection';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'We develop cross-platform mobile apps with clean UI, smooth performance, and scalable architecture.',
    tags: ['Android & iOS apps', 'Fast and responsive', 'Clean UI/UX'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Development',
    description: 'We create modern, responsive websites that are fast, user-friendly, and optimized for performance.',
    tags: ['Responsive design', 'SEO-friendly structure', 'High performance'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M16.732 3.732a2.5 2.5 0 013.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Branding & Design',
    description: 'We design logos, branding, and marketing visuals that give your business a strong and consistent identity.',
    tags: ['Logo design', 'Social media creatives', 'Brand identity'],
  },

];

const ServiceCard = ({ icon, title, description, tags, index }) => (
  <AnimatedSection delay={(index % 4) * 100} className="group h-full">
    <article className="glass-card p-7 h-full flex flex-col gap-5 cursor-default hover:scale-[1.02] transition-transform duration-300">
      {/* Icon with themed color */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center
        group-hover:scale-110 transition-transform duration-300"
        style={{
          color: 'var(--accent)',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
        }}>
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
      </div>

      <div className="flex items-center gap-1.5 text-sm font-medium opacity-100
        translate-y-1 group-hover:translate-y-0 transition-all duration-300"
        style={{ color: 'var(--accent)' }}>
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  </AnimatedSection>
);

export default function Services() {
  return (
    <section id="services" className="section-padding relative section-alt" aria-labelledby="services-heading">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection><span className="section-label mb-4 inline-flex">Our Services</span></AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
              style={{ color: 'var(--text-primary)' }}>
              What We <span className="gradient-text">Build</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              From concept to deployment - we craft digital products that look great, perform flawlessly, and scale.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
