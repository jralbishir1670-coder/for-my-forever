import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';

export default function ReasonCard({ reason, isDiscovered, isFavorite, isHighlighted, onDiscover, onToggleFavorite, onAnimationComplete }) {
  return (
    <motion.article
      id={`reason-${reason.id}`}
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      animate={isHighlighted ? { scale: [1, 1.045, 1], y: [0, -8, 0] } : { scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onAnimationComplete={isHighlighted ? onAnimationComplete : undefined}
      className="[perspective:1200px]"
    >
      <button
        type="button"
        onClick={() => onDiscover(reason.id)}
        className="group relative block min-h-72 w-full rounded-[1.5rem] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#be185d] focus-visible:ring-offset-4"
        aria-label={isDiscovered ? `Reason ${reason.number}: ${reason.text}` : `Reveal reason ${reason.number}`}
        aria-expanded={isDiscovered}
      >
        <motion.div
          className="relative min-h-72 w-full rounded-[1.5rem] transition-transform duration-500 [transform-style:preserve-3d]"
          animate={{ rotateY: isDiscovered ? 180 : 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 flex min-h-72 flex-col justify-between rounded-[1.5rem] border border-[#f3dbe5] bg-white/74 p-5 shadow-[0_18px_55px_rgba(111,61,83,0.09)] backdrop-blur-xl transition duration-300 [backface-visibility:hidden] group-hover:-translate-y-1 group-hover:shadow-[0_30px_90px_rgba(190,24,93,0.16)]">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-[#edd9a9] bg-[#fffaf0] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#a97218]">
                {reason.category}
              </span>
              <FiHeart className="text-[#be185d]" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-[#351728]">Reason #{reason.number}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#9f5274]">Tap to reveal</p>
            </div>
          </div>

          <div className="absolute inset-0 flex min-h-72 flex-col justify-between rounded-[1.5rem] border border-white/70 bg-[#fffaf6]/88 p-5 shadow-[0_24px_80px_rgba(190,24,93,0.14)] backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a97218]">Reason #{reason.number}</span>
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={() => onToggleFavorite(reason.id)}
                label={isFavorite ? `Remove reason ${reason.number} from favorites` : `Save reason ${reason.number} as favorite`}
              />
            </div>
            <p className="font-display text-3xl font-semibold leading-tight text-[#421a2d] sm:text-4xl">{reason.text}</p>
            <p className="text-sm font-medium text-[#8f496a]">{reason.category}</p>
          </div>
        </motion.div>
      </button>
    </motion.article>
  );
}
