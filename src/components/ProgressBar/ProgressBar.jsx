import { motion } from 'framer-motion';

export default function ProgressBar({ value, total }) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <section className="glass-panel rounded-[1.75rem] p-5" aria-labelledby="reasons-progress-title">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p id="reasons-progress-title" className="text-sm font-semibold text-[#5c213d]">
            You've discovered {value} of {total} reasons.
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#9f5274]">{percentage}% opened</p>
        </div>
        <p className="font-display text-3xl font-semibold text-[#421a2d]">{value}/{total}</p>
      </div>
      <div
        className="mt-4 h-3 overflow-hidden rounded-full bg-white/65"
        role="progressbar"
        aria-label="Reasons discovered progress"
        aria-valuemin="0"
        aria-valuemax={total}
        aria-valuenow={value}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#be185d] via-[#d88b4a] to-[#f3c76d]"
          initial={false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
}
