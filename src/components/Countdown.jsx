import { motion } from 'framer-motion';
import useCountdown from '../hooks/useCountdown';
import { formatCountdownValue } from '../utils/date';

function Countdown({ targetDate }) {
  const parts = useCountdown(targetDate);

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {parts.map((part, index) => (
        <motion.div
          key={part.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/75 bg-white/52 p-4 text-center shadow-[0_18px_50px_rgba(109,35,63,0.12)] backdrop-blur-xl sm:p-5"
        >
          <div className="absolute inset-x-4 top-0 h-px gold-line" />
          <span className="font-display block text-4xl font-semibold text-forever-wine sm:text-5xl">
            {formatCountdownValue(part.value)}
          </span>
          <span className="mt-2 block text-xs font-bold uppercase tracking-[0.28em] text-forever-ink/55">
            {part.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Countdown;
