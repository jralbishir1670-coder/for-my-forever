import { motion } from 'framer-motion';

function FuturePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden pt-24">
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-forever-blush/20 to-white/50" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-display luxury-text text-5xl font-semibold text-forever-wine">Our Future</h1>
          <p className="mt-4 text-forever-ink/70">Everything we are looking forward to.</p>
        </motion.div>
      </div>
    </main>
  );
}

export default FuturePage;
