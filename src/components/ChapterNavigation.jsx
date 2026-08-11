import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function ChapterNavigation({ previous, next }) {
  return (
    <nav
      aria-label="Birthday chapter navigation"
      className="mx-auto mt-14 flex w-full max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      {previous ? (
        <ChapterLink direction="previous" {...previous} />
      ) : (
        <span aria-hidden="true" className="hidden sm:block" />
      )}
      {next ? <ChapterLink direction="next" {...next} /> : null}
    </nav>
  );
}

function ChapterLink({ direction, to, label }) {
  const isNext = direction === 'next';

  return (
    <motion.div whileHover={{ y: -2, scale: 1.015 }} whileTap={{ scale: 0.985 }}>
      <Link
        to={to}
        className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-3 text-sm font-semibold text-[#5c213d] shadow-[0_16px_44px_rgba(111,61,83,0.12)] outline-none backdrop-blur-xl transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[#be185d] focus-visible:ring-offset-4 sm:w-auto ${
          isNext ? 'sm:ml-auto' : ''
        }`}
      >
        {!isNext && <FiArrowLeft aria-hidden="true" />}
        {label}
        {isNext && <FiArrowRight aria-hidden="true" />}
      </Link>
    </motion.div>
  );
}
