import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import AnimatedSection from '../components/ui/AnimatedSection';

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'contact@jptechverse.com', href: 'mailto:contact@jptechverse.com' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '📍', label: 'Location', value: 'Tamil Nadu, India 🇮🇳', href: 'https://maps.google.com/?q=Tamil+Nadu+India' },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = 'Name must be at least 2 characters.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await addDoc(collection(db, 'enquiries'), {
        name: form.name.trim(), email: form.email.trim(),
        subject: form.subject.trim(), message: form.message.trim(),
        timestamp: serverTimestamp(), status: 'new',
      });
      setStatus('success');
      setForm(initialForm);
      setErrors({});
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

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
              Have a project in mind? Tell us about it. We respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <AnimatedSection animation="fade-left" className="lg:col-span-2">
            <div className="space-y-5 h-full flex flex-col">
              {contactInfo.map(({ icon, label, value, href }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-5 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl
                    group-hover:scale-110 transition-transform"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5 font-semibold" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  </div>
                </a>
              ))}

              {/* Flutter notice */}
              <div className="glass-card p-5 flex-1" style={{ borderColor: 'rgba(1,74,173,0.2)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ background: 'rgba(1,74,173,0.08)' }}>🎯</div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--accent)' }}>Flutter Admin App</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      All enquiries are received in real-time via our Flutter Admin App, connected to Firebase Firestore for instant review and response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection animation="fade-right" className="lg:col-span-3">
            <div className="glass-card p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send us a message</h3>

              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 p-4 rounded-xl text-emerald-700 dark:text-emerald-400"
                  style={{ background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.25)' }} role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div><p className="font-semibold text-sm">Message sent successfully!</p><p className="text-xs opacity-80">We'll respond within 24 hours.</p></div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-center gap-3 p-4 rounded-xl text-rose-700 dark:text-rose-400"
                  style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.25)' }} role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div><p className="font-semibold text-sm">Failed to send message.</p><p className="text-xs opacity-80">Please check your Firebase config or try again.</p></div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="John Doe" autoComplete="name" required
                      className="form-input" style={errors.name ? { borderColor: 'rgba(225,29,72,0.5)' } : {}} />
                    {errors.name && <p className="mt-1.5 text-xs text-rose-500" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="john@company.com" autoComplete="email" required
                      className="form-input" style={errors.email ? { borderColor: 'rgba(225,29,72,0.5)' } : {}} />
                    {errors.email && <p className="mt-1.5 text-xs text-rose-500" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Subject</label>
                  <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="e.g. App Development Quote" className="form-input" />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange}
                    rows={5} placeholder="Tell us about your project, timeline, and goals..."
                    className="form-input resize-none" required
                    style={errors.message ? { borderColor: 'rgba(225,29,72,0.5)' } : {}} />
                  {errors.message && <p className="mt-1.5 text-xs text-rose-500" role="alert">{errors.message}</p>}
                  <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>{form.message.length}/500 characters</p>
                </div>

                <button type="submit" disabled={status === 'loading'}
                  className="w-full btn-primary justify-center py-4 text-base rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                  ) : (
                    <>Send Message <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
                  )}
                </button>
                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>🔒 Your information is secure and will never be shared.</p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
