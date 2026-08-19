import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function MemoryCard({ memory, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.58, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-[1.75rem] border border-forever-blush/60 bg-white/74 shadow-luxury backdrop-blur-xl transition duration-300 hover:shadow-[0_30px_90px_rgba(109,35,63,0.16)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-forever-blush/30">
        <img
          src={memory.image}
          alt={memory.alt ?? memory.title ?? `Memory ${index != null ? index + 1 : ''}`}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-forever-champagne">{memory.date}</p>
          <FaHeart className="mt-1 shrink-0 text-forever-rose" aria-hidden="true" />
        </div>
        <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-forever-wine">{memory.title}</h3>
        <p className="mt-4 text-sm leading-7 text-forever-ink/80">{memory.description}</p>
        <blockquote className="mt-5 border-l border-forever-champagne pl-4 font-handwritten text-xl leading-8 text-forever-wine/80">
          “{memory.quote}”
        </blockquote>
      </div>
    </motion.article>
  );
}
