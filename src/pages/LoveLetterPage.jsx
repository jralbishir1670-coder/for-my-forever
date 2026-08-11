import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import ReadingProgress from '../components/ReadingProgress';

const paragraphs = [
  'My love, today I want to tell you that your birthday is more than a date on the calendar to me. It is a celebration of the light you bring into every room, every conversation, and every dream I have ever dared to hold.',
  'You are the kind of person who makes ordinary days feel softer, warmer, and full of meaning. The way you love, the way you care, and the way you make this world feel gentler is something I will always cherish.',
  'As I write this to you, I want you to know that I see your strength, your kindness, and your quiet elegance. I see the beautiful heart behind the smile, and I know how deeply you are loved.',
  'I hope this birthday brings you joy that feels endless, peace that feels steady, and happiness that surrounds you from every side. May this year be filled with beautiful surprises, deep gratitude, and the kind of love that stays close to your heart.',
  'And if there is one thing I want you to remember today, it is this: you are treasured, adored, and loved beyond words. Forever yours, and always with you in every beautiful thing ahead.',
];

function LoveLetterPage() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <ReadingProgress />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,240,242,0.95)_0%,_rgba(255,249,244,0.82)_50%,_rgba(253,243,231,0.92)_100%)]" />
        <div className="absolute left-[-8rem] top-16 h-60 w-60 rounded-full bg-forever-rose/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-forever-champagne/30 blur-3xl" />
        <div className="absolute bottom-[-7rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-forever-sage/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forever-rose">💌 A Letter From My Heart</p>
          <h1 className="font-display mt-3 text-4xl font-semibold text-forever-wine sm:text-5xl lg:text-6xl">
            For the woman who makes love feel like home.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-forever-ink/70 sm:text-lg">
            A soft, intimate birthday letter written with all the tenderness in my heart.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="glass-panel relative w-full overflow-hidden rounded-[2.25rem] border border-white/70 p-5 shadow-[0_24px_90px_rgba(109,35,63,0.13)] sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.38),_transparent_52%)]" />
          <div className="relative z-10 space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.12, ease: 'easeOut' }}
                className="text-lg leading-9 text-forever-ink/78 sm:text-xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.8, ease: 'easeOut' }}
          className="mt-10 flex items-center gap-3 text-forever-wine"
        >
          <FaHeart aria-hidden="true" />
          <span className="text-xl font-semibold">Forever Yours,</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9, ease: 'easeOut' }}
          className="font-display text-3xl font-semibold text-forever-wine sm:text-4xl"
        >
          Usman ❤️
        </motion.p>

        <PageNavButtons previousPath="/" nextPath="/prayer" previousLabel="Home" nextLabel="Prayer" />
      </div>
    </PageTransition>
  );
}

export default LoveLetterPage;
