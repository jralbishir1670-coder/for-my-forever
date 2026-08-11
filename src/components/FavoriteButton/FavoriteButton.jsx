import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function FavoriteButton({ isFavorite, onClick, label }) {
  return (
    <motion.button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-white/78 text-[#be185d] shadow-sm outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[#be185d]"
      aria-label={label}
      aria-pressed={isFavorite}
    >
      {isFavorite ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
    </motion.button>
  );
}
