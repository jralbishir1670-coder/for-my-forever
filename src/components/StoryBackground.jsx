import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const particles = [
  { left: '7%', top: '20%', size: 5, delay: 0.2 },
  { left: '18%', top: '70%', size: 3, delay: 1.4 },
  { left: '72%', top: '16%', size: 4, delay: 0.8 },
  { left: '88%', top: '50%', size: 5, delay: 1.9 },
  { left: '58%', top: '78%', size: 3, delay: 2.5 },
  { left: '42%', top: '30%', size: 4, delay: 3.1 },
];

const hearts = [
  { left: '11%', top: '36%', size: 14, delay: 0 },
  { left: '81%', top: '26%', size: 12, delay: 1.1 },
  { left: '86%', top: '76%', size: 15, delay: 2.2 },
  { left: '23%', top: '84%', size: 11, delay: 3.2 },
];

export default function StoryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff8fb_0%,#fff4f0_30%,#fdf7fb_62%,#fffdf8_100%)]" />
      <div className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#f3a6bd]/28 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      <div className="absolute right-[-9rem] top-44 h-72 w-72 rounded-full bg-[#f3c76d]/24 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute bottom-[-12rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f7dce6]/45 blur-3xl" />

      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-[#c99a3d]/45"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.18, 0.7, 0.18], y: [-8, -24, -8] }}
          transition={{ duration: 6.8, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {hearts.map((heart) => (
        <motion.span
          key={`${heart.left}-${heart.top}`}
          className="absolute text-[#be185d]/20"
          style={{ left: heart.left, top: heart.top, fontSize: heart.size }}
          animate={{ opacity: [0.2, 0.58, 0.2], y: [0, -18, 0], rotate: [-3, 4, -3] }}
          transition={{ duration: 8, delay: heart.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaHeart />
        </motion.span>
      ))}
    </div>
  );
}
