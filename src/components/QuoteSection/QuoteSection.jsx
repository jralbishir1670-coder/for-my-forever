import { motion } from 'framer-motion';

export default function QuoteSection({ quote }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="mx-auto max-w-4xl px-2 py-14 text-center sm:py-20"
      aria-label="Romantic quote"
    >
      <div className="mx-auto mb-8 h-px max-w-xs bg-gradient-to-r from-transparent via-forever-champagne to-transparent" aria-hidden="true" />
      <blockquote className="font-display text-balance text-4xl font-semibold leading-tight text-forever-wine sm:text-5xl md:text-6xl">
        “{quote}”
      </blockquote>
      <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-forever-champagne to-transparent" aria-hidden="true" />
    </motion.section>
  );
}
