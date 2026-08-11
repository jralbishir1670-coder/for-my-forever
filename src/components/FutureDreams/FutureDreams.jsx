import { motion } from 'framer-motion';

export default function FutureDreams({ dreams }) {
  return (
    <section className="mx-auto max-w-7xl" aria-labelledby="future-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#be185d]">Our future, In shaa Allah</p>
        <h2 id="future-title" className="font-display mt-3 text-5xl font-semibold text-[#351728] sm:text-6xl">
          💍 Our Future Together
        </h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dreams.map((dream, index) => (
          <motion.article
            key={dream.title}
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: index * 0.05, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="min-h-64 rounded-[1.75rem] border border-[#f3dbe5] bg-white/74 p-6 shadow-[0_18px_55px_rgba(111,61,83,0.09)] backdrop-blur-xl transition hover:shadow-[0_30px_90px_rgba(190,24,93,0.16)]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#edd9a9] bg-[#fffaf0] text-3xl" aria-hidden="true">
              {dream.emoji}
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#351728]">{dream.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#6b4b5d]">{dream.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
