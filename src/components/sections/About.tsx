import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { PORTFOLIO } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '3+', label: 'Years Experience', color: '#7c3aed' },
  { value: '20+', label: 'Projects Built', color: '#06b6d4' },
  { value: '5+', label: 'Happy Clients', color: '#ec4899' },
];

export default function About() {
  const { personal, social } = PORTFOLIO;
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#080810' }}>
      <div
        className="orb absolute w-96 h-96 bottom-0 right-0"
        style={{ background: 'rgba(6,182,212,0.05)' }}
      />

      <div className="section" ref={ref}>
        <p className="section-label">01. About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="leading-relaxed text-lg whitespace-pre-line mb-10"
              style={{ color: '#94a3b8', lineHeight: '1.9' }}
            >
              {personal.bio}
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: <MapPin size={15} />, label: personal.location, color: '#7c3aed' },
                { icon: <Mail size={15} />, label: personal.email, href: `mailto:${personal.email}`, color: '#ec4899' },
                ...(social.github ? [{ icon: <GithubIcon size={15} />, label: social.github.replace('https://', ''), href: social.github, color: '#a78bfa' }] : []),
                ...(social.linkedin ? [{ icon: <LinkedinIcon size={15} />, label: social.linkedin.replace('https://', ''), href: social.linkedin, color: '#06b6d4' }] : []),
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex-shrink-0" style={{ color: item.color, filter: `drop-shadow(0 0 4px ${item.color})` }}>
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm transition-all duration-200"
                      style={{ color: '#94a3b8' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = item.color; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: '#94a3b8' }}>{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-xl p-6 transition-all duration-300 cursor-default group"
                style={{
                  background: 'rgba(10,10,22,0.8)',
                  border: `1px solid ${s.color}20`,
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${s.color}15, inset 0 0 20px ${s.color}05`;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${s.color}20`;
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-center gap-5">
                  <span
                    className="text-5xl font-black"
                    style={{ color: s.color, filter: `drop-shadow(0 0 12px ${s.color}70)` }}
                  >
                    {s.value}
                  </span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#f0f0ff' }}>{s.label}</p>
                    <div className="w-8 h-0.5 mt-1 rounded-full" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
