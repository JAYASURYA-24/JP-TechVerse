import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const contactInfo = [
  { 
    icon: <Mail className="w-6 h-6" />, 
    label: 'Email', 
    value: 'contact.jptechverse@gmail.com', 
    href: 'mailto:contact.jptechverse@gmail.com' 
  },
  { 
    icon: <Phone className="w-6 h-6" />, 
    label: 'Phone', 
    value: '+91 97901 89483', 
    href: 'tel:+919790189483' 
  },
  { 
    icon: <MapPin className="w-6 h-6" />, 
    label: 'Location', 
    value: 'Chennai, Tamil Nadu', 
    href: 'https://maps.google.com/?q=Chennai+Tamil+Nadu' 
  },
];

export default function Contact() {
  const whatsappNumber = "+919790189483"; // Updated to match phone
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contact" className="section-padding relative" aria-labelledby="contact-heading"
      style={{ background: 'var(--bg)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--border-accent), transparent)' }} aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection><span className="section-label mb-4 inline-flex">Get In Touch</span></AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Let's Build Something <span className="gradient-text">Together</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Have a project in mind? Reach out to us through any of these channels. We respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map(({ icon, label, value, href }, i) => (
            <AnimatedSection key={label} delay={i * 100}>
              <a href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card p-8 flex flex-col items-center text-center gap-4 group hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl
                  group-hover:scale-110 transition-transform shadow-lg"
                  style={{ 
                    background: 'var(--bg-secondary)', 
                    border: '1px solid var(--border)',
                    color: 'var(--accent)'
                  }}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2 font-bold opacity-60" style={{ color: 'var(--text-muted)' }}>{label}</p>
                  <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{value}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>

    </section>
  );
}
