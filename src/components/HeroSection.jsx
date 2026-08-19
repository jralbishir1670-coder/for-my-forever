import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FiArrowRight, FiGift } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex min-h-[96vh] w-full max-w-7xl items-center px-5 pb-14 pt-32 sm:px-8 lg:pt-36">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14 }}
          className="text-center lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.38em] text-forever-rose lg:justify-start"
          >
            <span className="hidden h-px w-12 bg-forever-rose/35 sm:inline-block" />
            19th August — a birthday made for my Angel
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display luxury-text mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[0.9] sm:text-7xl md:text-8xl lg:mx-0 lg:text-9xl"
          >
            Happy Birthday, My Angel ❤️
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-forever-ink/76 sm:text-xl lg:mx-0"
          >
            Welcome to a birthday experience created just for you, filled with
            soft memories, hidden little surprises, and all the love I know how
            to give.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              className="group inline-flex min-h-16 items-center gap-3 rounded-full bg-forever-wine px-8 py-4 text-base font-bold text-white shadow-[0_26px_78px_rgba(109,35,63,0.38)] outline-none ring-1 ring-white/40 transition hover:bg-forever-rose focus-visible:ring-4 focus-visible:ring-forever-rose/30 sm:px-10 sm:text-lg"
            >
              <Link to="/letter" className="inline-flex items-center gap-3 outline-none focus-visible:ring-4 focus-visible:ring-white/60">
                Open Your Surprise
                <FiArrowRight
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                  size={22}
                />
              </Link>
            </motion.div>
            <div className="flex items-center gap-3 text-sm font-semibold text-forever-ink/62">
              <span className="h-px w-10 bg-forever-champagne" />
              Day 1 of a love-filled reveal
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[27rem]"
        >
          <div className="absolute -inset-4 rounded-[3rem] bg-white/20 blur-2xl" />
          <div className="absolute inset-0 rounded-[2.65rem] border border-white/70 bg-gradient-to-br from-white/78 via-forever-blush/55 to-forever-champagne/55 shadow-luxury backdrop-blur-2xl" />
          <div className="absolute inset-4 rounded-[2.15rem] border border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.62),rgba(255,238,231,0.28))]" />
          <div className="absolute left-7 right-7 top-8 h-px gold-line" />
          <div className="absolute bottom-8 left-7 right-7 h-px gold-line" />
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 flex h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/85 bg-white/42 p-8 text-center shadow-glow backdrop-blur-xl"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forever-wine text-white shadow-lg ring-8 ring-white/35">
              <FiGift aria-hidden="true" size={27} />
            </span>
            <p className="font-display mt-6 text-5xl font-semibold leading-tight text-forever-wine sm:text-6xl">
              Day 1
            </p>
            <div className="my-4 h-px w-20 gold-line" />
            <p className="mt-4 max-w-56 text-sm font-medium leading-6 text-forever-ink/65">
              A first door into something tender, beautiful, and completely ours.
            </p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [3, -2, 3] }}
            transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-16 rounded-3xl border border-white/70 bg-white/55 px-4 py-3 shadow-[0_18px_45px_rgba(109,35,63,0.15)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-forever-wine">
              <FaHeart aria-hidden="true" className="text-forever-rose" />
              Made with love
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 bottom-20 rounded-3xl border border-white/70 bg-white/55 px-4 py-3 shadow-[0_18px_45px_rgba(109,35,63,0.15)] backdrop-blur-xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-forever-rose">
              Forever
            </p>
          </motion.div>
          <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-forever-sage/25 blur-2xl" />
          <div className="absolute -right-5 top-12 h-24 w-24 rounded-full bg-forever-rose/25 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
