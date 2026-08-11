import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionPreview({ id, eyebrow, title, copy, icon: Icon }) {
  return (
    <motion.article
      id={id}
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/48 p-5 shadow-[0_24px_70px_rgba(109,35,63,0.13)] backdrop-blur-2xl sm:p-6"
    >
      <div className="absolute inset-x-6 top-0 h-px gold-line opacity-70" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-forever-champagne/25 blur-2xl transition group-hover:bg-forever-rose/20" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-forever-wine text-white shadow-lg ring-8 ring-white/30">
        <Icon aria-hidden="true" size={21} />
      </div>
      <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.28em] text-forever-rose">
        {eyebrow}
      </p>
      <h2 className="font-display relative mt-3 text-3xl font-semibold leading-tight text-forever-wine">
        {title}
      </h2>
      <p className="relative mt-4 text-sm leading-7 text-forever-ink/68">{copy}</p>
    </motion.article>
  );
}

export default SectionPreview;
