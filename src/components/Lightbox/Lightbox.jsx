import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

export default function Lightbox({ images, activeIndex, onClose, onNext, onPrevious }) {
  const isOpen = activeIndex !== null;
  const touchStartX = useRef(null);
  const activeImage = isOpen ? images[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrevious();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;

    if (Math.abs(distance) > 48) {
      if (distance < 0) onNext();
      if (distance > 0) onPrevious();
    }

    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && activeImage ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forever-ink/88 px-4 py-6 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Memory photo viewer"
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close gallery backdrop"
            onClick={onClose}
            tabIndex={-1}
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white outline-none backdrop-blur-xl transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
            aria-label="Close gallery lightbox"
          >
            <FiX aria-hidden="true" size={22} />
          </button>

          <button
            type="button"
            onClick={onPrevious}
            className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white outline-none backdrop-blur-xl transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white sm:inline-flex"
            aria-label="Show previous photo"
          >
            <FiChevronLeft aria-hidden="true" size={26} />
          </button>

          <motion.figure
            key={activeImage.src}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-5xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[72vh] w-full rounded-[1.5rem] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.34)]"
            />
            <figcaption className="mx-auto mt-5 max-w-3xl text-center font-display text-2xl leading-8 text-white sm:text-3xl">
              {activeImage.caption}
            </figcaption>
          </motion.figure>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white outline-none backdrop-blur-xl transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white sm:inline-flex"
            aria-label="Show next photo"
          >
            <FiChevronRight aria-hidden="true" size={26} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:hidden">
            <button type="button" onClick={onPrevious} className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl" aria-label="Show previous photo">
              Previous
            </button>
            <button type="button" onClick={onNext} className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl" aria-label="Show next photo">
              Next
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
