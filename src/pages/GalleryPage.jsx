import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import FavoriteMoments from '../components/FavoriteMoments/FavoriteMoments';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import Lightbox from '../components/Lightbox/Lightbox';
import { favoriteMoments, galleryImages } from '../data/storyData';

function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);
  const showNext = () => {
    setActiveImageIndex((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
  };
  const showPrevious = () => {
    setActiveImageIndex((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length));
  };

  return (
    <PageTransition>
      <main className="relative isolate overflow-hidden px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="absolute inset-0 -z-10 aurora-bg" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_50%)]" />

        <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-forever-rose shadow-[0_12px_30px_rgba(109,35,63,0.08)]"
          >
            <FaHeart className="text-sm" aria-hidden="true" />
            For Angel
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-display mt-6 text-5xl font-semibold text-forever-wine sm:text-6xl lg:text-7xl"
          >
            Angel’s Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-5 max-w-3xl text-lg leading-8 text-forever-ink/75 sm:text-xl"
          >
            "A collection of the moments that belong to our story."
          </motion.p>
        </section>

        <section className="mx-auto mt-16 max-w-7xl rounded-[2.4rem] border border-white/70 bg-white/50 p-6 shadow-luxury backdrop-blur-2xl sm:p-8 lg:p-12">
          <GalleryGrid images={galleryImages} onOpen={openLightbox} />
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <FavoriteMoments moments={favoriteMoments} />
        </section>

        <PageNavButtons previousPath="/story" nextPath="/reasons" previousLabel="Story" nextLabel="100 Reasons" />
      </main>

      <Lightbox
        images={galleryImages}
        activeIndex={activeImageIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </PageTransition>
  );
}

export default GalleryPage;
