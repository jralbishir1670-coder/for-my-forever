import { motion } from 'framer-motion';
import { FaHeart, FaPray, FaShieldAlt, FaStar, FaSun } from 'react-icons/fa';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';

const prayers = [
  { title: 'Health', text: 'May your body be strong, your spirit be peaceful, and your days be filled with gentle energy.', icon: FaHeart },
  { title: 'Peace', text: 'May every step you take be calm, every burden be light, and every heart be at ease.', icon: FaSun },
  { title: 'Happiness', text: 'May joy find you in ordinary moments and stay close to you in every season.', icon: FaStar },
  { title: 'Success', text: 'May your dreams unfold beautifully and your efforts be rewarded with grace.', icon: FaStar },
  { title: 'Protection', text: 'May you be guarded, guided, and wrapped in kindness wherever life leads.', icon: FaShieldAlt },
  { title: 'Faith', text: 'May your trust remain steady and your heart remain anchored in hope.', icon: FaPray },
  { title: 'Family', text: 'May love, warmth, and togetherness always surround the people you hold dear.', icon: FaHeart },
  { title: 'Dreams', text: 'May your aspirations grow brighter and your future feel full of promise.', icon: FaSun },
  { title: 'Marriage', text: 'May your future home be filled with love, understanding, and lasting peace.', icon: FaHeart },
  { title: 'Future', text: 'May every chapter ahead be blessed, beautiful, and written with grace.', icon: FaStar },
];

function PrayerPage() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,244,248,0.95)_0%,_rgba(255,249,244,0.86)_50%,_rgba(250,241,226,0.92)_100%)]" />
        <div className="absolute left-[-7rem] top-10 h-64 w-64 rounded-full bg-forever-rose/18 blur-3xl" />
        <div className="absolute right-[-4rem] top-28 h-72 w-72 rounded-full bg-forever-champagne/28 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-forever-sage/18 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forever-rose">🤲 My Birthday Prayer For You</p>
          <h1 className="font-display mt-3 text-4xl font-semibold text-forever-wine sm:text-5xl lg:text-6xl">
            A prayer for your health, peace, joy, and the beautiful life ahead.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-forever-ink/70 sm:text-lg">
            May Allah (SWT) bless every step you take and every dream you carry in your heart.
          </p>
        </motion.div>

        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {prayers.map((prayer, index) => {
            const Icon = prayer.icon;
            return (
              <motion.article
                key={prayer.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.06, ease: 'easeOut' }}
                className="glass-panel rounded-[1.5rem] border border-white/70 p-6 shadow-[0_18px_55px_rgba(109,35,63,0.09)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-forever-wine shadow-sm">
                  <Icon aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-forever-wine">{prayer.title}</h2>
                <p className="mt-3 text-sm leading-7 text-forever-ink/72">{prayer.text}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
          className="mt-10 max-w-3xl rounded-[1.75rem] border border-white/70 bg-white/60 px-6 py-6 text-center shadow-[0_16px_45px_rgba(109,35,63,0.08)] backdrop-blur-xl"
        >
          <p className="text-lg leading-8 text-forever-ink/78">
            May Allah (SWT) bless every step you take, every dream you nurture, and every beautiful chapter that is still waiting for you.
          </p>
        </motion.div>

        <PageNavButtons previousPath="/letter" nextPath="/" previousLabel="Letter" nextLabel="Home" />
      </div>
    </PageTransition>
  );
}

export default PrayerPage;
