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

const floatingHearts = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 90 + 5}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
  animationDelay: `${Math.random() * 5}s`,
  scale: Math.random() * 0.4 + 0.6,
}));

function LoveLetterPage() {
  const wordCount = paragraphs.join(' ').split(' ').length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <ReadingProgress estimatedTime={readingTime} />
      
      {/* Background & Floating Particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,240,242,0.95)_0%,_rgba(255,249,244,0.82)_50%,_rgba(253,243,231,0.92)_100%)]" />
        <div className="absolute left-[-8rem] top-16 h-60 w-60 rounded-full bg-forever-rose/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-forever-champagne/30 blur-3xl" />
        
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: [0, 0.4, 0], y: '-20vh' }}
            transition={{
              duration: parseFloat(heart.animationDuration),
              delay: parseFloat(heart.animationDelay),
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute text-forever-rose/30"
            style={{ left: heart.left, scale: heart.scale }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forever-rose">💌 A Letter From My Heart</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="glass-panel relative w-full overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/40 p-8 shadow-[0_24px_90px_rgba(109,35,63,0.13)] backdrop-blur-2xl sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.6),_transparent_60%)]" />
          
          <div className="relative z-10 font-display mb-10 border-b border-forever-rose/20 pb-6 text-center">
            <h1 className="text-3xl font-semibold italic text-forever-wine sm:text-4xl">
              To my beautiful future wife,
            </h1>
          </div>

          <div className="relative z-10 space-y-8">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className="text-lg leading-loose text-forever-ink/80 sm:text-xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="relative z-10 mt-12 flex flex-col items-center gap-2 border-t border-forever-rose/20 pt-8"
          >
            <span className="text-lg font-semibold text-forever-wine">Forever Yours,</span>
            <span className="font-display flex items-center gap-2 text-4xl font-semibold text-forever-wine">
              Usman <FaHeart className="text-xl text-forever-rose" />
            </span>
          </motion.div>
        </motion.section>

        <div className="mt-12 w-full">
          <PageNavButtons previousPath="/" nextPath="/prayer" previousLabel="Home" nextLabel="Prayer" />
        </div>
      </div>
    </PageTransition>
  );
}

export default LoveLetterPage;
