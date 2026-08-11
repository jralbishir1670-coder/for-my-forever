import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export default function FavoritesModal({ isOpen, favorites, onClose, onRemoveFavorite }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#271822]/78 px-4 py-6 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="favorites-title"
        >
          <button className="absolute inset-0 h-full w-full cursor-default" type="button" aria-label="Close favorites backdrop" onClick={onClose} tabIndex={-1} />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-panel relative z-10 max-h-[86vh] w-full max-w-3xl overflow-hidden rounded-[2rem] p-5 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#be185d]">Saved reasons</p>
                <h2 id="favorites-title" className="font-display mt-2 text-4xl font-semibold text-[#351728]">Your Favorites</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-[#5c213d] outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[#be185d]"
                aria-label="Close favorites"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 max-h-[60vh] overflow-y-auto pr-1">
              {favorites.length === 0 ? (
                <div className="rounded-[1.5rem] border border-white/70 bg-white/64 p-8 text-center">
                  <FaHeart className="mx-auto text-[#be185d]" aria-hidden="true" size={28} />
                  <p className="font-display mt-4 text-3xl font-semibold text-[#421a2d]">No favorites saved yet.</p>
                  <p className="mt-3 text-sm leading-7 text-[#6b4b5d]">
                    Open a few cards and tap the heart on the reasons you want to keep close.
                  </p>
                </div>
              ) : (
                <div className="grid gap-3">
                  {favorites.map((reason) => (
                    <article key={reason.id} className="rounded-[1.25rem] border border-white/70 bg-white/68 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a97218]">Reason #{reason.number}</p>
                          <p className="mt-2 text-base leading-7 text-[#421a2d]">{reason.text}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveFavorite(reason.id)}
                          className="shrink-0 rounded-full border border-[#f3dbe5] bg-white/70 px-3 py-2 text-xs font-semibold text-[#be185d] outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[#be185d]"
                        >
                          Remove
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
