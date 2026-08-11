import { AnimatePresence, motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';

export default function UnlockMessage({ message, onDismiss }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          className="fixed left-4 right-4 top-28 z-50 mx-auto max-w-xl rounded-[1.5rem] border border-white/70 bg-white/86 p-5 text-center shadow-[0_24px_80px_rgba(111,61,83,0.18)] backdrop-blur-2xl"
          role="status"
        >
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#edd9a9] bg-[#fffaf0] text-[#a97218]">
            <FiLock aria-hidden="true" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#be185d]">{message.title}</p>
          <p className="font-display mt-2 text-3xl font-semibold leading-tight text-[#421a2d]">{message.message}</p>
          <button
            type="button"
            onClick={onDismiss}
            className="mt-4 rounded-full bg-[#be185d] px-5 py-2 text-sm font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-[#be185d] focus-visible:ring-offset-4"
          >
            Keep opening
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
