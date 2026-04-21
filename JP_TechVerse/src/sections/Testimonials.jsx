import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';

const testimonials = [
  { name: 'Arun Kumar', role: 'Founder, StartupXY', avatar: 'AK', rating: 5, text: 'JP TechVerse delivered our app on time and exceeded all expectations. The UI was stunning and the code quality was excellent.', company: 'E-Commerce' },
  { name: 'Priya Sharma', role: 'CEO, HealthTech Co.', avatar: 'PS', rating: 5, text: 'The team built our entire healthcare platform within 6 weeks. Real-time features, beautiful design — everything worked perfectly.', company: 'Healthcare' },
  { name: 'Mohammed Ali', role: 'CTO, LogisticsPro', avatar: 'MA', rating: 5, text: 'Affordable pricing, fast turnaround, and top-notch technical skills. Our delivery tracking app got amazing reviews.', company: 'Logistics' },
];

const techLogos = [
  { name: 'Flutter', icon: '🎯' }, { name: 'React', icon: '⚛️' },
  { name: 'Firebase', icon: '🔥' }, { name: 'Node.js', icon: '💚' },
  { name: 'Next.js', icon: '▲' }, { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Python', icon: '🐍' }, { name: 'AWS', icon: '☁️' },
  { name: 'Figma', icon: '🎨' }, { name: 'Docker', icon: '🐳' },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5" aria-label={`${count} stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, role, avatar, rating, text, company }) => (
  <article className="glass-card p-8 flex flex-col gap-5 transition-colors duration-200 h-full">
    <div className="flex justify-between items-start">
      <StarRating count={rating} />
      <span className="tech-badge text-xs">{company}</span>
    </div>
    <blockquote className="text-base leading-relaxed flex-1 italic" style={{ color: 'var(--text-secondary)' }}>
      "{text}"
    </blockquote>
    <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-cyan) 100%)' }}>
        {avatar}
      </div>
      <div>
        <p className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{name}</p>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{role}</p>
      </div>
    </div>
  </article>
);

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide for mobile/tab carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden section-alt" aria-labelledby="testimonials-heading">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--border-accent), transparent)' }} aria-hidden="true" />

      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedSection><span className="section-label mb-4 inline-flex">Testimonials</span></AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Don't take our word for it - hear directly from founders and teams we've worked with.
            </p>
          </AnimatedSection>
        </div>

        {/* Desktop View: Grid of 3 */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100}>
              <TestimonialCard {...t} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile/Tablet View: Carousel */}
        <div className="lg:hidden relative mb-20">
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md mx-auto"
              >
                <TestimonialCard {...testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8' : 'w-2 opacity-30'}`}
                style={{ background: 'var(--accent)' }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee (Always clean) */}
        <div className="mt-20">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: 'var(--text-muted)' }}>Technologies We Use</p>
            </div>
          </AnimatedSection>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} aria-hidden="true" />
            <div className="marquee-track gap-4 py-2" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
              {[...techLogos, ...techLogos, ...techLogos].map((tech, i) => (
                <div key={`${tech.name}-${i}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl flex-shrink-0 transition-colors duration-200 glass-card">
                  <span className="text-xl" role="img" aria-label={tech.name}>{tech.icon}</span>
                  <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
