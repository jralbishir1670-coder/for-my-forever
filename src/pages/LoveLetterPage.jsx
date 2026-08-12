import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import ReadingProgress from '../components/ReadingProgress';

const paragraphs = [
  'My beautiful love, on this special day I wanted to wrap every feeling for you in one letter. Each word is soft, sincere, and held close to my heart.',
  'You are the bloom of my brightest mornings and the warmth in every quiet night. Your presence makes ordinary moments feel luxurious, gentle, and perfect in their simplicity.',
  'I pray that this birthday brings you peace, joy, and a reminder that you are deeply cherished, beyond every sentence I can write.',
  'Your smile is a promise that every dream is possible, and your kindness is a grace that touches everyone around you. I am grateful for the way you make life feel more beautiful every day.',
  'Thank you for choosing me, for believing in us, and for making our shared future feel like the most precious gift.',
];

const floatingHearts = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 90 + 5}%`,
  animationDuration: `${Math.random() * 6 + 5}s`,
  animationDelay: `${Math.random() * 5}s`,
  scale: Math.random() * 0.4 + 0.7,
}));

function LoveLetterPage() {
  const estimatedTime = useMemo(() => Math.ceil(paragraphs.join(' ').split(' ').length / 180), []);

  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <ReadingProgress estimatedTime={estimatedTime} />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,245,241,0.95),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(179,63,99,0.12),transparent_28%)]" />
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-forever-champagne/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-28 h-72 w-72 rounded-full bg-forever-rose/20 blur-3xl" />

        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.4, 0], y: [-20, -200] }}
            transition={{
              duration: parseFloat(heart.animationDuration),
              delay: parseFloat(heart.animationDelay),
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute text-forever-rose/25"
            style={{ left: heart.left, scale: heart.scale }}
          >
            <FaHeart aria-hidden="true" />
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 mx-auto flex max-w-4xl flex-col gap-12">
        <section className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-rose/80"
          >
            💌 A Letter From My Heart
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
            className="font-display luxury-text mt-4 text-4xl font-semibold text-forever-wine sm:text-5xl lg:text-6xl"
          >
            A luxury love letter for you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg"
          >
            Soft words meant to make your heart feel seen, treasured, and beautifully held.
          </motion.p>
        </section>

        <section className="glass-panel relative overflow-hidden rounded-[2.25rem] border border-white/75 bg-white/45 p-8 shadow-[0_30px_90px_rgba(109,35,63,0.14)] backdrop-blur-2xl sm:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_55%)]" />
          <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full bg-forever-champagne/30 blur-3xl" />

          <div className="relative z-10 font-display mb-10 border-b border-forever-rose/15 pb-6 text-center">
            <h2 className="text-3xl font-semibold text-forever-wine sm:text-4xl">To my beautiful future wife,</h2>
          </div>

          <div className="relative z-10 space-y-8">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: 'easeOut' }}
                className="text-lg leading-9 text-forever-ink/80 sm:text-xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="mt-14 border-t border-forever-rose/15 pt-10 text-right"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-forever-rose/80">Forever Yours,</p>
            <p className="mt-4 font-display text-4xl font-semibold text-forever-wine">Usman ❤️</p>
          </motion.div>
        </section>

        <div className="mt-12 w-full">
          <PageNavButtons previousPath="/" nextPath="/prayer" previousLabel="Previous" nextLabel="Next" />
        </div>
      </main>
    </PageTransition>
  );
}

export default LoveLetterPage;
