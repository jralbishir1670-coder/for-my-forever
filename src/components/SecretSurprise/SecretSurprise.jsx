import { motion } from 'framer-motion';
import { FiGift } from 'react-icons/fi';
import CompletionConfetti from '../UnlockMessage/CompletionConfetti.jsx';

export default function SecretSurprise({ isOpen, onOpen, message }) {
  return (
    <section className="mx-auto max-w-5xl" aria-labelledby="secret-title">
      <CompletionConfetti show={isOpen} />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="glass-panel overflow-hidden rounded-[2.25rem] p-6 text-center sm:p-10"
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#be185d]">Secret surprise</p>
        <h2 id="secret-title" className="font-display mt-3 text-5xl font-semibold text-[#351728] sm:text-6xl">
          One last gift
        </h2>

        {!isOpen ? (
          <motion.button
            type="button"
            onClick={onOpen}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="luxury-button mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#be185d] px-8 py-4 text-base font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-[#be185d] focus-visible:ring-offset-4"
          >
            <FiGift aria-hidden="true" />
            Open My Final Surprise
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/70 bg-white/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <p className="font-display text-4xl font-semibold text-[#421a2d]">{message.title}</p>
            <p className="mt-5 text-base leading-8 text-[#654458] sm:text-lg">{message.text}</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
