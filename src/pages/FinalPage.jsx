import { useState } from 'react';
import { motion } from 'framer-motion';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import SecretSurprise from '../components/SecretSurprise/SecretSurprise';
import { personalContent } from '../data/personalContent';

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

        <SecretSurprise isOpen={isOpen} onOpen={() => setIsOpen(true)} message={personalContent.final} />

        {isOpen ? (
          <section className="relative mx-auto max-w-6xl rounded-[2.25rem] border border-white/70 bg-[#fff7f3]/90 p-8 shadow-luxury backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle,rgba(255,227,213,0.9),transparent_42%)]" />
            <div className="relative z-10 grid gap-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-rose/90">🎉 {personalContent.final.celebrationTitle}</p>
              <h2 className="font-display text-5xl font-semibold text-forever-wine sm:text-6xl">{personalContent.final.celebrationHeading}</h2>
              <p className="mx-auto max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg">
                {personalContent.final.celebrationText}
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
          <PageNavButtons previousPath="/future" previousLabel="Future" />
        </div>
      </div>
    </PageTransition>
  );
}