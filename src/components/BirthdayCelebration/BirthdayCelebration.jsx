import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import CompletionConfetti from '../UnlockMessage/CompletionConfetti.jsx';

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  angle: (index * 360) / 18,
  delay: (index % 6) * 0.08,
}));

export default function BirthdayCelebration() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-4 py-16 text-center" aria-labelledby="celebration-title">
      <CompletionConfetti show />
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,#fff1f6_0%,#fffaf0_45%,transparent_72%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#f3c76d]"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.8 }}
            whileInView={{
              x: Math.cos((particle.angle * Math.PI) / 180) * 180,
              y: Math.sin((particle.angle * Math.PI) / 180) * 110,
              opacity: [0, 1, 0],
              scale: [0.8, 1.6, 0.4],
            }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 2.6, delay: particle.delay, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10"
      >
        <FaHeart className="mx-auto text-[#be185d]" aria-hidden="true" size={34} />
        <h2 id="celebration-title" className="font-display mt-5 text-balance text-5xl font-semibold leading-tight text-[#351728] sm:text-6xl md:text-7xl">
          🎉 Happy Birthday, My Forever ❤️
        </h2>
        <p className="font-display mx-auto mt-7 max-w-3xl text-4xl font-semibold leading-tight text-[#421a2d] sm:text-5xl">
          “My greatest gift wasn't creating this website—it was finding you.”
        </p>
      </motion.div>
    </section>
  );
}
