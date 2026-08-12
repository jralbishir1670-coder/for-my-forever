import { motion } from 'framer-motion';

export default function FavoriteMoments({ moments }) {
  return (
    <section id="favorite-moments" className="mx-auto max-w-7xl scroll-mt-32" aria-labelledby="favorite-moments-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-forever-rose">Favorite moments</p>
        <h2 id="favorite-moments-title" className="font-display mt-3 text-4xl font-semibold text-forever-wine sm:text-5xl md:text-6xl">
          The memories I want to keep forever
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {moments.map((moment, index) => (
          <motion.article
            key={moment.title}
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: index * 0.05, ease: 'easeOut' }}
            className="group overflow-hidden rounded-[1.75rem] border border-forever-blush/60 bg-white/74 shadow-luxury backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(109,35,63,0.16)]"
          >
            {moment.image ? (
              <div className="aspect-[4/3] overflow-hidden bg-forever-blush/30">
                <img src={moment.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            ) : null}
            <div className="p-5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-forever-champagne bg-forever-pearl text-2xl shadow-sm" aria-hidden="true">
                {moment.emoji}
              </div>
              <h3 className="font-display text-3xl font-semibold leading-tight text-forever-wine">{moment.title}</h3>
              <p className="mt-4 text-sm leading-7 text-forever-ink/80">{moment.story}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
