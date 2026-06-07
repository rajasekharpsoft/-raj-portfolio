import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import emailjs from '@emailjs/browser';
import { PORTFOLIO } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { personal, social, contact } = PORTFOLIO;
  const { ref, isInView } = useScrollReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contact.emailjsServiceId || !contact.emailjsTemplateId || !contact.emailjsPublicKey) {
      alert('Add your EmailJS keys in src/data/config.ts to enable the contact form.');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(
        contact.emailjsServiceId,
        contact.emailjsTemplateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        contact.emailjsPublicKey
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const links = [
    { icon: <Mail size={18} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: '#ec4899' },
    ...(social.github ? [{ icon: <GithubIcon size={18} />, label: 'GitHub', value: social.github.replace('https://', ''), href: social.github, color: '#7c3aed' }] : []),
    ...(social.linkedin ? [{ icon: <LinkedinIcon size={18} />, label: 'LinkedIn', value: social.linkedin.replace('https://', ''), href: social.linkedin, color: '#06b6d4' }] : []),
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#0d0d18' }}>
      <div
        className="orb absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2"
        style={{ background: 'rgba(124,58,237,0.07)' }}
      />

      <div className="section" ref={ref}>
        <p className="section-label">05. Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm mb-8"
              style={{
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: '#67e8f9',
              }}
            >
              <Terminal size={14} />
              Currently open to new opportunities
            </div>

            <p className="leading-relaxed text-lg mb-10" style={{ color: '#94a3b8', lineHeight: '1.9' }}>
              I'm always excited to connect with new people and explore interesting projects.
              Whether you have a question, a project idea, or just want to say hello — my inbox is open!
            </p>

            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(10,10,22,0.8)',
                    border: `1px solid ${link.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${link.color}50`;
                    el.style.boxShadow = `0 0 25px ${link.color}12`;
                    el.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${link.color}20`;
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                      color: link.color,
                      boxShadow: `0 0 12px ${link.color}20`,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: '#475569' }}>{link.label}</p>
                    <p className="text-sm" style={{ color: '#f0f0ff' }}>{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl p-7 flex flex-col gap-5"
              style={{
                background: 'rgba(10,10,22,0.85)',
                border: '1px solid rgba(30,30,53,0.8)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Top neon bar */}
              <div
                className="h-px w-full rounded-full mb-2"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #ec4899)' }}
              />

              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: '#475569' }}>YOUR_NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="John Doe"
                  className="neon-input"
                />
              </div>
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: '#475569' }}>EMAIL_ADDRESS</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="neon-input"
                />
              </div>
              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: '#475569' }}>MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Hi Rajasekhar, I'd love to collaborate on..."
                  className="neon-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm" style={{ color: '#22c55e' }}>
                  <CheckCircle size={16} />
                  Message sent! I'll reply soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm" style={{ color: '#f87171' }}>
                  <AlertCircle size={16} />
                  Failed. Please email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
