import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const hearts = [
  { top: '18%', left: '9%', size: 18, delay: 0 },
  { top: '28%', left: '86%', size: 14, delay: 0.5 },
  { top: '58%', left: '6%', size: 12, delay: 1.1 },
  { top: '72%', left: '89%', size: 20, delay: 0.2 },
  { top: '42%', left: '73%', size: 10, delay: 0.8 },
];

function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="noise-overlay absolute inset-0 opacity-80" />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-forever-champagne/55 blur-3xl sm:h-96 sm:w-96"
      />
      <motion.div
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-forever-rose/34 blur-3xl sm:h-[30rem] sm:w-[30rem]"
      />
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.25, 0.42, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-forever-sage/25 blur-3xl sm:h-[34rem] sm:w-[34rem]"
      />

      {hearts.map((heart) => (
        <motion.span
          key={`${heart.top}-${heart.left}`}
          className="absolute text-forever-rose/30 drop-shadow-sm"
          style={{ top: heart.top, left: heart.left, fontSize: heart.size }}
          animate={{ y: [0, -18, 0], rotate: [-4, 5, -4], opacity: [0.2, 0.48, 0.2] }}
          transition={{
            duration: 5.6,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FaHeart />
        </motion.span>
      ))}
    </div>
  );
}

export default BackgroundDecor;
