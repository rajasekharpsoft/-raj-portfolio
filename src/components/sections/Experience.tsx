import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { PORTFOLIO } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  const { experience } = PORTFOLIO;
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="py-28 relative overflow-hidden" style={{ background: '#0d0d18' }}>
      <div
        className="orb absolute w-96 h-96 top-0 left-0"
        style={{ background: 'rgba(124,58,237,0.06)' }}
      />

      <div className="section" ref={ref}>
        <p className="section-label">02. Experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="section-divider" />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #7c3aed, #06b6d4, #ec4899)' }}
          />

          <div className="flex flex-col gap-14">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${job.company}-${i}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start md:gap-0 gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Glowing dot */}
                  <div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 mt-5"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                      boxShadow: '0 0 12px #7c3aed, 0 0 24px rgba(124,58,237,0.4)',
                      border: '2px solid #080810',
                    }}
                  />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-10' : 'md:ml-10'}`}>
                    <div
                      className="rounded-xl p-6 transition-all duration-300 group"
                      style={{
                        background: 'rgba(10,10,22,0.85)',
                        border: '1px solid rgba(30,30,53,0.8)',
                        backdropFilter: 'blur(10px)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(124,58,237,0.4)';
                        el.style.boxShadow = '0 0 30px rgba(124,58,237,0.12), 0 0 60px rgba(6,182,212,0.06)';
                        el.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(30,30,53,0.8)';
                        el.style.boxShadow = 'none';
                        el.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Top bar */}
                      <div
                        className="h-0.5 w-full rounded-full mb-5 opacity-60"
                        style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4, transparent)' }}
                      />

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3
                            className="font-bold text-lg mb-1 transition-colors duration-200"
                            style={{ color: '#f0f0ff' }}
                          >
                            {job.role}
                          </h3>
                          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#a78bfa' }}>
                            <Briefcase size={13} style={{ filter: 'drop-shadow(0 0 4px #7c3aed)' }} />
                            {job.company}
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
                          style={{
                            background: 'rgba(6,182,212,0.08)',
                            border: '1px solid rgba(6,182,212,0.2)',
                            color: '#67e8f9',
                          }}
                        >
                          <Calendar size={11} />
                          {job.period}
                        </div>
                      </div>

                      {job.location && (
                        <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: '#475569' }}>
                          <MapPin size={12} />
                          {job.location}
                        </div>
                      )}

                      <ul className="flex flex-col gap-2.5">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                            <span className="mt-1.5 shrink-0" style={{ color: '#06b6d4', filter: 'drop-shadow(0 0 3px #06b6d4)' }}>▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
