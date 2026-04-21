import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const features = [
  {
    icon: '💰',
    title: 'Affordable Pricing',
    points: ['Premium quality at startup-friendly prices.', 'Transparent quotes, no hidden fees.'],
    color: '#059669'
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    points: ['MVPs in 2–4 weeks.', 'Agile process with fast iterations.'],
    color: 'var(--accent)'
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    points: ['Built to grow with your business.', 'From 10 users to millions.'],
    color: '#7c3aed'
  },
  {
    icon: '🎨',
    title: 'Modern UI/UX',
    points: ['Clean, intuitive designs users love.', 'Built to reflect your brand.'],
    color: '#e11d48'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    points: ['Security-first development approach.', 'Built using industry best practices.'],
    color: '#d97706'
  },
  {
    icon: '🛎️',
    title: '24/7 Support',
    points: ["We stay with you after launch.", "Reliable support whenever you need it."],
    color: '#0284c7'
  },
];

const stats = [
  { end: 10, suffix: '+', label: 'Projects Delivered' },
  { end: 7, suffix: '+', label: 'Happy Clients' },
  { end: 98, suffix: '%', label: 'Satisfaction Rate' },
  { end: 1, suffix: '+', label: 'Years of Experience' },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 50;
        const timer = setInterval(() => {
          start = Math.min(start + step, end);
          setCount(Math.round(start));
          if (start >= end) clearInterval(timer);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative" aria-labelledby="why-us-heading"
      style={{ background: 'var(--bg)' }}>
      <div className="section-container relative z-10">

        <div className="text-center mb-16">
          <AnimatedSection><span className="section-label mb-4 inline-flex">Why Choose Us</span></AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 id="why-us-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              The <span className="gradient-text">JP TechVerse</span> Advantage
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Technical excellence combined with genuine partnership to deliver meaningful results.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <AnimatedSection className="mb-16">
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x"
              style={{ '--tw-divide-opacity': 1, borderColor: 'var(--border)' }}>
              {stats.map(({ end, suffix, label }) => (
                <div key={label} className="text-center py-4 lg:py-0">
                  <Counter end={end} suffix={suffix} />
                  <p className="text-sm mt-1 font-medium" style={{ color: 'var(--text-muted)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={(i % 3) * 100}>
              <div className="glass-card p-7 group hover:scale-[1.02] transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl
                  group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  {feat.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{feat.title}</h3>
                  <ul className="space-y-2">
                    {feat.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: feat.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold mt-4"
                  style={{ color: feat.color }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Included in every project
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
