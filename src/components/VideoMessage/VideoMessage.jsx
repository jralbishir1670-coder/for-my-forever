import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

export default function VideoMessage() {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = async () => {
    setHasStarted(true);
    await videoRef.current?.play()?.catch(() => undefined);
  };

  return (
    <section className="mx-auto max-w-6xl" aria-labelledby="video-title">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.68, ease: 'easeOut' }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#be185d]">Final day</p>
        <h1 id="video-title" className="font-display mt-3 text-balance text-5xl font-semibold leading-tight text-[#351728] sm:text-6xl md:text-7xl">
          🎥 A Message From My Heart
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 28 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.72, delay: 0.12, ease: 'easeOut' }}
        className="glass-panel relative mt-10 overflow-hidden rounded-[2.25rem] p-4 sm:p-6"
      >
        <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-[#351728]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls={hasStarted}
            preload="metadata"
            poster="/video-poster.svg"
            aria-label="Personal birthday video message"
            aria-describedby="video-transcript"
          >
            <source src="/final-message.mp4" type="video/mp4" />
            {/* Optional captions file: add /final-message.vtt when available */}
            <track kind="captions" src="/final-message.vtt" srcLang="en" label="English captions" />
            Your browser does not support the video tag.
          </video>

          {!hasStarted ? (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#271822]/10 text-white outline-none transition hover:bg-[#271822]/16 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Play personal video message"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#be185d] shadow-[0_18px_55px_rgba(190,24,93,0.42)]">
                <FiPlay aria-hidden="true" size={34} className="ml-1" />
              </span>
              <span className="mt-5 text-sm font-semibold uppercase tracking-[0.24em]">Play message</span>
            </button>
          ) : null}
        </div>
      </motion.div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-[#654458] sm:text-lg">
        Please watch until the end. Every second was made to remind you how loved, valued, and prayed for you are.
      </p>
      <div id="video-transcript" className="sr-only" aria-hidden={hasStarted ? 'false' : 'true'}>
        Placeholder transcript: add the full video transcript to this element or link to a separate transcript file. This improves accessibility and allows screen readers to read the video's content.
      </div>
    </section>
  );
}
