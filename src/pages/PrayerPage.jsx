import { motion } from 'framer-motion';
import { FaPrayingHands, FaStar } from 'react-icons/fa';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';

const prayers = [
  { title: 'Health', text: 'May you always be wrapped in good health, vitality, and strength, my love.' },
  { title: 'Peace', text: 'May your heart find tranquility in every storm, and your mind stay calm and bright.' },
  { title: 'Joy', text: 'May every day bring you quiet joy, simple beauty, and radiant smiles.' },
  { title: 'Blessings', text: 'May your life overflow with blessings, grace, and every tender mercy from above.' },
  { title: 'Protection', text: 'May Allah (SWT) protect you from harm and guide your steps with loving care.' },
  { title: 'Faith', text: 'May your faith remain strong, your spirit comforted, and your purpose clear.' },
  { title: 'Family', text: 'May our home be filled with warmth, laughter, and the strength of togetherness.' },
  { title: 'Dreams', text: 'May your hopes be supported, your dreams stay bright, and your future feel secure.' },
  { title: 'Love', text: 'May our love continue to grow in kindness, patience, and deep understanding.' },
  { title: 'Future', text: 'May our journey ahead be blessed, luminous, and full of purpose and peace.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + (i % 3) * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
};

function PrayerPage() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,250,249,0.95),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(166,72,112,0.12),transparent_25%)]" />
        <div className="absolute left-[-7rem] top-16 h-72 w-72 rounded-full bg-forever-champagne/20 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-16 h-72 w-72 rounded-full bg-forever-rose/20 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-24 w-24 -translate-x-1/2 rounded-full bg-white/40 blur-2xl" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forever-champagne/90">
            🤲 A Gentle Prayer For Your Birthday
          </p>
          <h1 className="font-display luxury-text mt-4 text-4xl font-semibold text-forever-wine sm:text-5xl lg:text-6xl">
            Soft prayers for your beautiful soul
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg">
            A graceful collection of wishes, whispered with love and gratitude for every step you take.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="glass-panel relative w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-8 shadow-[0_32px_100px_rgba(109,35,63,0.14)] backdrop-blur-2xl sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_55%)]" />
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-forever-champagne/30 blur-3xl" />
          <div className="absolute left-8 bottom-8 h-20 w-20 rounded-full bg-forever-rose/30 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-forever-rose/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-forever-rose/90">
              <FaPrayingHands aria-hidden="true" />
              With every tender wish
            </div>
            <h2 className="font-display text-3xl font-semibold text-forever-wine sm:text-4xl">
              May every blessing reach you.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-forever-ink/75 sm:text-base">
              I pray for peace in your heart, kindness in your days, and the softest joy surrounding you always.
            </p>
          </div>
        </motion.section>

        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {prayers.map((prayer, index) => (
            <motion.article
              key={prayer.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 p-6 shadow-[0_24px_60px_rgba(109,35,63,0.12)] transition duration-300"
            >
              <div className="absolute inset-x-6 top-0 h-1.5 rounded-full bg-gradient-to-r from-forever-champagne via-forever-rose to-forever-wine opacity-80" />
              <div className="relative z-10 mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-forever-champagne/15 text-forever-wine shadow-sm">
                  <FaStar aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-forever-wine">
                  {prayer.title}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-forever-ink/80 sm:text-base">
                {prayer.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="w-full rounded-[2rem] border border-white/60 bg-white/40 p-8 text-center shadow-[0_22px_70px_rgba(109,35,63,0.1)]"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-forever-rose/80">Ameen</p>
          <p className="mt-4 text-lg leading-8 text-forever-ink/75 sm:text-xl">
            May these prayers become a gentle promise for your day, and may your birthday feel as sacred as you are.
          </p>
        </motion.div>

        <div className="mt-8 w-full">
          <PageNavButtons previousPath="/letter" nextPath="/future" previousLabel="Letter" nextLabel="Future" />
        </div>
      </main>
    </PageTransition>
  );
}

export default PrayerPage;
