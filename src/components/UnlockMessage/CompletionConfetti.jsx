import { motion } from 'framer-motion';

const pieces = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: (index % 8) * 0.08,
  color: index % 3 === 0 ? '#be185d' : index % 3 === 1 ? '#f3c76d' : '#f7a7c5',
}));

export default function CompletionConfetti({ show }) {
  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden="true">
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute top-[-2rem] h-3 w-2 rounded-full"
          style={{ left: piece.left, backgroundColor: piece.color }}
          initial={{ y: -20, rotate: 0, opacity: 0 }}
          animate={{ y: '110vh', rotate: 540, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, delay: piece.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}
