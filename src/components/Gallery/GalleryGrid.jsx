import { motion } from 'framer-motion';

export default function GalleryGrid({ images, onOpen }) {
  return (
    <section id="gallery" className="mx-auto max-w-7xl scroll-mt-32" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-forever-rose">Gallery</p>
        <h2 id="gallery-title" className="font-display mt-3 text-4xl font-semibold text-forever-wine sm:text-5xl md:text-6xl">
          A little gallery of us
        </h2>
        <p className="mt-5 text-base leading-8 text-forever-ink/80 sm:text-lg">
          Placeholder memories for now, ready to become your real photos when the surprise grows.
        </p>
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.56, delay: index * 0.035, ease: 'easeOut' }}
            onClick={() => onOpen(index)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/68 p-2 text-left shadow-luxury outline-none backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(109,35,63,0.16)] focus-visible:ring-2 focus-visible:ring-forever-rose focus-visible:ring-offset-4"
            aria-label={`Open memory photo: ${image.caption}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full rounded-[1.1rem] object-cover transition duration-700 group-hover:scale-[1.035] ${index % 3 === 1 ? 'aspect-[4/5]' : index % 3 === 2 ? 'aspect-[1/1]' : 'aspect-[5/4]'}`}
            />
            <p className="px-3 pb-3 pt-4 text-sm leading-6 text-forever-ink/80">{image.caption}</p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
