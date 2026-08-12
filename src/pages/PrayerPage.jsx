import { motion } from 'framer-motion';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';

const prayers = [
  { title: 'Health', text: 'May you always be wrapped in good health, vitality, and strength, my love.' },
  { title: 'Peace', text: 'May your heart find tranquility in every storm, and your mind be free of worry.' },
  { title: 'Happiness', text: 'May your days be filled with endless laughter, deep joy, and beautiful surprises.' },
  { title: 'Success', text: 'May every door of opportunity open for you, and may you excel in all you do.' },
  { title: 'Protection', text: 'May Allah (SWT) protect you from all harm and guide you safely through life.' },
  { title: 'Faith', text: 'May your faith remain steadfast, bringing you comfort, purpose, and light.' },
  { title: 'Family', text: 'May our family always be surrounded by love, warmth, and beautiful moments.' },
  { title: 'Dreams', text: 'May all your deepest aspirations turn into reality. I will always support you.' },
  { title: 'Marriage', text: 'May our bond grow stronger every day, filled with understanding and deep love.' },
  { title: 'Future', text: 'May our future together be brighter and more beautiful than we can imagine.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + (i % 3) * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

function PrayerPage() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,240,242,0.9)_0%,_rgba(255,249,244,0.85)_50%,_rgba(253,243,231,0.9)_100%)]" />
        <div className="absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-forever-champagne/20 blur-3xl" />
        <div className="absolute right-[-2rem] bottom-20 h-64 w-64 rounded-full bg-forever-rose/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forever-champagne">🤲 My Birthday Prayer For You</p>
          <h1 className="font-display luxury-text mt-4 text-4xl font-semibold text-forever-wine sm:text-5xl lg:text-6xl">
            A Prayer for Your Beautiful Soul
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-8 inline-block rounded-full border border-white/60 bg-white/50 px-8 py-4 shadow-sm backdrop-blur-md"
          >
            <p className="font-display text-xl italic text-forever-ink/80 sm:text-2xl">
              "May Allah (SWT) bless every step you take."
            </p>
          </motion.div>
        </motion.div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel group relative overflow-hidden rounded-2xl border border-white/70 p-6 shadow-luxury transition-all hover:shadow-[0_20px_60px_rgba(109,35,63,0.15)]"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-forever-champagne/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="font-display text-2xl font-semibold text-forever-wine">
                {prayer.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forever-ink/75 sm:text-base">
                {prayer.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 w-full">
          <PageNavButtons previousPath="/letter" nextPath="/future" previousLabel="Letter" nextLabel="Future" />
        </div>
      </div>
    </PageTransition>
  );
}

export default PrayerPage;
