import { motion } from 'framer-motion';
import { FaStarAndCrescent } from 'react-icons/fa';

export default function FinalPrayer({ prayers }) {
  return (
    <section className="mx-auto max-w-7xl" aria-labelledby="final-prayer-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#be185d]">A final dua</p>
        <h2 id="final-prayer-title" className="font-display mt-3 text-5xl font-semibold text-[#351728] sm:text-6xl">
          🤲 My Prayer For You
        </h2>
      </div>
      <div className="glass-panel mt-10 rounded-[2rem] p-5 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {prayers.map((prayer, index) => (
            <motion.article
              key={prayer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.035, ease: 'easeOut' }}
              className="rounded-[1.35rem] border border-white/70 bg-white/62 p-5"
            >
              <FaStarAndCrescent className="text-[#a97218]" aria-hidden="true" />
              <h3 className="font-display mt-4 text-3xl font-semibold text-[#351728]">{prayer.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b4b5d]">{prayer.text}</p>
            </motion.article>
          ))}
        </div>
        <p className="font-display mt-8 text-center text-5xl font-semibold text-[#421a2d]">Ameen.</p>
      </div>
    </section>
  );
}
