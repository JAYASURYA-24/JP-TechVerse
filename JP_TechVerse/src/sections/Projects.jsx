import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';

const projects = [
  { id: 1, title: 'Shine-Up Platform', description: 'Full-service booking platform with customer, partner, and admin apps. Real-time tracking, OTP verification, and payment integration.', category: 'app', tech: ['Flutter', 'Go', 'Firebase', 'PostgreSQL'], color: 'from-blue-500 to-cyan-500', icon: '✨', liveUrl: '#' },
  { id: 2, title: 'E-Commerce Dashboard', description: 'Modern admin dashboard for e-commerce with analytics, inventory management, and real-time sales tracking.', category: 'web', tech: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'], color: 'from-violet-500 to-purple-600', icon: '🛒', liveUrl: '#' },
  { id: 3, title: 'HealthCare App', description: 'Doctor appointment booking app with video consultations, prescription management, and health records.', category: 'app', tech: ['Flutter', 'Firebase', 'WebRTC', 'Razorpay'], color: 'from-emerald-500 to-teal-500', icon: '🏥', liveUrl: '#' },
  { id: 4, title: 'Digital Agency Website', description: 'Premium marketing website for a digital agency with animations, contact form, and portfolio showcase.', category: 'web', tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Vite'], color: 'from-rose-500 to-pink-600', icon: '🎯', liveUrl: '#' },
  { id: 5, title: 'Food Delivery App', description: 'Location-based food delivery app with real-time order tracking, push notifications, and multi-restaurant support.', category: 'app', tech: ['Flutter', 'Node.js', 'Socket.io', 'Firebase'], color: 'from-orange-500 to-amber-500', icon: '🍔', liveUrl: '#' },
  { id: 6, title: 'SaaS Analytics Platform', description: 'Business intelligence platform with custom dashboards, data visualization, and automated reporting.', category: 'web', tech: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'], color: 'from-sky-500 to-blue-600', icon: '📊', liveUrl: '#' },
];

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Apps', value: 'app' },
  { label: 'Websites', value: 'web' },
];

const ProjectCard = ({ project }) => (
  <article className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
    <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300" role="img" aria-label={project.title}>{project.icon}</span>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a href={project.liveUrl}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-blue-50 transition-colors"
          aria-label={`View ${project.title}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          View Project
        </a>
      </div>
      <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-medium bg-black/40 text-white border border-white/20">
        {project.category === 'app' ? '📱 App' : '🌐 Website'}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-1" style={{ background: 'var(--surface)' }}>
      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
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

