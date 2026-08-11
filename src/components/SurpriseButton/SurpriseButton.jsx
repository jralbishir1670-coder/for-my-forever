import { motion } from 'framer-motion';
import { FiGift } from 'react-icons/fi';

export default function SurpriseButton({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#be185d] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(190,24,93,0.34)] outline-none transition focus-visible:ring-2 focus-visible:ring-[#be185d] focus-visible:ring-offset-4 sm:bottom-7 sm:right-7"
      aria-label="Open a random love reason"
    >
      <FiGift aria-hidden="true" />
      Surprise Me
    </motion.button>
  );
}
