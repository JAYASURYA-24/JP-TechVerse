import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';

const projects = [
  { 
    id: 1, 
    title: 'Sastha Traders Billing App', 
    description: 'A mobile billing and invoicing application featuring real-time revenue analytics, pending invoice tracking, and seamless on-the-go invoice generation.', 
    category: 'app', 
    tech: ['Flutter', 'Firebase', 'Razorpay'], 
    image: '/projects/sastha_mobile.png',
  },
  { 
    id: 2, 
    title: 'Solvex Compliant Register', 
    description: 'A compliant mobile register application featuring digital inspection logs, compliance checklists, and secure e-signatures for streamlined auditing.', 
    category: 'app', 
    tech: ['Flutter', 'Firebase', 'Golang', 'PostgreSQL'], 
    image: '/projects/solvex_mobile.png',
  },
  { 
    id: 3, 
    title: 'SAT Contract Services Website', 
    description: 'A stunning corporate marketing website designed to establish a premium brand presence with high-performance animations and contact workflows.', 
    category: 'web', 
    tech: ['React.js', 'Firebase', 'Vercel'], 
    image: '/projects/sat.png',
  },
  { 
    id: 4, 
    title: 'VitalTrack Mobile App', 
    description: 'A modern health and fitness tracking iOS/Android application featuring daily custom activity rings, real-time workout maps, and heart rate analytics.', 
    category: 'app', 
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'HealthKit'], 
    image: '/projects/health_app.png',
  },
  { 
    id: 5, 
    title: 'Aurora AI Workspace', 
    description: 'A high-end SaaS dashboard powered by Generative AI. Designed for enterprise users to visualize real-time analytics, prompt outputs, and global map activity.', 
    category: 'web', 
    tech: ['React.js', 'Tailwind CSS', 'Recharts', 'OpenAI'], 
    image: '/projects/saas.png',
  },
  { 
    id: 6, 
    title: 'Aethel E-Commerce Store', 
    description: 'An elegant e-commerce storefront crafted for effortless shopping, boasting a minimalist interface, fast dynamic cart, and seamless secure checkout.', 
    category: 'web', 
    tech: ['React.js', 'Razorpay', 'Zustand', 'Vercel'], 
    image: '/projects/ecommerce.png',
  },
];

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Apps', value: 'app' },
  { label: 'Websites', value: 'web' },
];

const ProjectCard = ({ project }) => (
  <article className="glass-card overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-lg">
    <div className={`relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden border-b`} style={{ borderColor: 'var(--border)' }}>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-medium bg-black/60 text-white backdrop-blur-md border border-white/20">
        {project.category === 'app' ? '📱 App' : '🌐 Website'}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-1" style={{ background: 'var(--surface)' }}>
      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
    </div>
  </article>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative" style={{ background: 'var(--bg)' }} aria-labelledby="projects-heading">
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <AnimatedSection><span className="section-label mb-4 inline-flex">Our Work</span></AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
              A selection of real-world projects we've built for startups and businesses across India.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              role="tablist" aria-label="Filter projects">
              {filters.map(f => (
                <button key={f.value} onClick={() => setActiveFilter(f.value)}
                  role="tab" aria-selected={activeFilter === f.value}
                  className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={activeFilter === f.value
                    ? { background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-cyan) 100%)', color: '#fff', boxShadow: '0 4px 14px rgba(1,74,173,0.25)' }
                    : { color: 'var(--text-muted)', background: 'transparent' }
                  }>
                  {f.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{
                  layout: { duration: 0.4, type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 }
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection className="text-center mt-12">
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>Want to see more of our work?</p>
          <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

