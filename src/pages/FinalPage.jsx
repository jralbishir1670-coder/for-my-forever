import { useState } from 'react';
import { motion } from 'framer-motion';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import SecretSurprise from '../components/SecretSurprise/SecretSurprise';
import VideoMessage from '../components/VideoMessage/VideoMessage';

const dreamCards = [
  { emoji: '🏡', title: 'Our Home', subtitle: 'A warm, loving space built together.' },
  { emoji: '✈️', title: 'Our Travels', subtitle: 'Adventures in every city and sunrise.' },
  { emoji: '🤲', title: 'Growing in Faith', subtitle: 'A gentle, faithful journey side by side.' },
  { emoji: '❤️', title: 'Supporting Each Other', subtitle: 'Kindness, care, and quiet strength always.' },
  { emoji: '👨‍👩‍👧‍👦', title: 'Building a Family', subtitle: 'Creating a home full of laughter and love.' },
  { emoji: '🌍', title: 'Adventures Together', subtitle: 'Beautiful memories with every step.' },
];

const prayers = [
  { title: 'Health', text: 'May every moment bless you with strength, healing, and ease.' },
  { title: 'Happiness', text: 'May your days glow with joy, laughter, and peace.' },
  { title: 'Protection', text: 'May you always be guarded, safe, and surrounded by grace.' },
  { title: 'Success', text: 'May every dream you chase unfold beautifully in time.' },
  { title: 'Peace', text: 'May tranquility fill your heart and calm your journey.' },
  { title: 'Faith', text: 'May your faith grow stronger with every season we share.' },
  { title: 'Family', text: 'May love and warmth always surround the family we build.' },
  { title: 'Marriage', text: 'May our bond remain tender, patient, and forever true.' },
  { title: 'Dreams', text: 'May your hopes rise gently and become your sweetest reality.' },
  { title: 'Long Life', text: 'May we be blessed with years of love, laughter, and grace.' },
];

const finalMessage = {
  title: 'Thank You, My Forever',
  text: 'For being the answer to every prayer, for making every day feel sacred, and for building a beautiful future with me — In shaa Allah.',
};

const fireworks = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  left: `${10 + index * 10}%`,
  delay: 0.2 + index * 0.15,
}));

export default function FinalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,235,224,0.9),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(179,63,99,0.1),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={`heart-${index}`}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0], y: [-10, -180], scale: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 8 + index * 0.1, delay: index * 0.15, ease: 'linear' }}
            className="absolute left-[calc(4%*var(--i))] top-[90%] text-forever-rose/15"
            style={{ ['--i']: index }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20">
        <section className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-champagne"
          >
            Final day
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="font-display luxury-text mt-5 text-5xl font-semibold text-forever-wine sm:text-6xl lg:text-7xl"
          >
            For My Forever ❤️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg"
          >
            This is the final celebration — a soft, luminous ending to the journey we built together, with every moment designed for you.
          </motion.p>
        </section>

        <VideoMessage />

        <section aria-labelledby="future-title" className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-luxury backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-rose/90">💍 Our Future Together</p>
              <h2 id="future-title" className="font-display mt-4 text-4xl font-semibold text-forever-wine sm:text-5xl">
                Dreams we will create together
              </h2>
              <p className="mt-4 text-sm leading-7 text-forever-ink/75 sm:text-base">
                Every card is a promise of the beautiful life we will build, In shaa Allah — soft, sacred, and deeply ours.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dreamCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group rounded-[1.75rem] border border-white/70 bg-[#fff6f4]/80 p-6 shadow-[0_24px_70px_rgba(109,35,63,0.1)] transition"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-forever-rose/10 text-3xl">
                    {card.emoji}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-forever-wine">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-forever-ink/75">{card.subtitle}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="prayer-title" className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-champagne">🤲 My Prayer For You</p>
            <h2 id="prayer-title" className="font-display mt-4 text-4xl font-semibold text-forever-wine sm:text-5xl">
              A prayer for every blessing
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {prayers.map((prayer, index) => (
              <motion.div
                key={prayer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                className="glass-panel rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-luxury"
              >
                <span className="inline-flex rounded-full bg-forever-champagne/30 px-3 py-2 text-sm font-semibold text-forever-wine">
                  {prayer.title}
                </span>
                <p className="mt-4 text-sm leading-7 text-forever-ink/75">{prayer.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <SecretSurprise
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          message={finalMessage}
        />

        {isOpen ? (
          <section className="relative mx-auto max-w-6xl rounded-[2.25rem] border border-white/70 bg-[#fff7f3]/90 p-8 shadow-luxury backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle,rgba(255,227,213,0.9),transparent_42%)]" />
            <div className="relative z-10 grid gap-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-rose/90">🎉 Happy Birthday, My Forever ❤️</p>
              <h2 className="font-display text-5xl font-semibold text-forever-wine sm:text-6xl">
                My greatest gift was finding you.
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg">
                Thank you for being the heart of every story we will write together. This site was made with love, and the sweetest part of it is you.
              </p>
              <p className="font-display text-2xl font-semibold text-forever-rose">Ameen.</p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {fireworks.map((spark) => (
                <motion.span
                  key={spark.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0, 0.9, 0], scale: [0.9, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2.6, delay: spark.delay, ease: 'easeOut' }}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fce7f3]/80 text-forever-rose shadow-glow"
                  style={{ left: spark.left }}
                >
                  ✨
                </motion.span>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mx-auto w-full max-w-4xl">
          <PageNavButtons previousPath="/future" nextPath="/" previousLabel="Future" nextLabel="Home" />
        </div>
      </div>
    </PageTransition>
  );
}
