import { useMemo } from 'react';

interface P {
  count?: number;
}

export default function Particles({ count = 40 }: P) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const colors = ['#7c3aed', '#06b6d4', '#a78bfa', '#67e8f9', '#ec4899', '#f0abfc'];
      const color = colors[i % colors.length];
      const left = Math.random() * 100;
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * 15;
      const size = 1 + Math.random() * 2.5;
      const drift = (Math.random() - 0.5) * 120;
      return { id: i, color, left, duration, delay, size, drift };
    });
  }, [count]);

  return (
    <div className="particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
