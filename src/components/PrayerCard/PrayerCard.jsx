import { motion } from 'framer-motion';

export default function PrayerCard({ title, text, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="glass-panel rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-luxury transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(109,35,63,0.12)]"
    >
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forever-rose/80">{title}</p>
      </header>
      <p className="mt-4 text-sm leading-7 text-forever-ink/80 sm:text-base">{text}</p>
    </motion.article>
  );
}
