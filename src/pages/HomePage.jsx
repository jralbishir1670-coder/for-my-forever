import { motion } from 'framer-motion';
import BackgroundDecor from '../components/BackgroundDecor';
import Countdown from '../components/Countdown';
import HeroSection from '../components/HeroSection';
import SectionPreview from '../components/SectionPreview';
import { countdownTarget } from '../data/countdown';
import { previewSections } from '../data/previewSections';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function HomePage() {
  return (
    <main id="home" className="relative isolate overflow-hidden">
      <BackgroundDecor />
      <HeroSection />

      <section
        aria-labelledby="countdown-title"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 lg:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10"
        >
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-rose">
              Day 1 begins
            </p>
            <h2
              id="countdown-title"
              className="font-display mt-3 text-3xl font-semibold text-forever-wine sm:text-4xl"
            >
              A little countdown to everything still waiting for us.
            </h2>
          </div>
          <Countdown targetDate={countdownTarget} />
        </motion.div>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-5 px-5 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {previewSections.map((section) => (
          <SectionPreview key={section.id} {...section} />
        ))}
      </motion.section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-24 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/60 bg-white/35 px-6 py-10 shadow-luxury backdrop-blur-2xl sm:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forever-rose">
            With all my heart
          </p>
          <h2
            id="contact-title"
            className="font-display mt-3 text-3xl font-semibold text-forever-wine sm:text-5xl"
          >
            This is only the beginning, my forever.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg">
            Every page after this is another little room in the surprise. For
            today, I just wanted the first moment to feel soft, beautiful, and
            unmistakably yours.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

export default HomePage;
