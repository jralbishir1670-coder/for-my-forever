import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';
import FavoritesModal from '../components/FavoritesModal/FavoritesModal';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ReasonCard from '../components/ReasonCard/ReasonCard';
import SearchBar from '../components/SearchBar/SearchBar';
import SurpriseButton from '../components/SurpriseButton/SurpriseButton';
import UnlockMessage from '../components/UnlockMessage/UnlockMessage';
import CompletionConfetti from '../components/UnlockMessage/CompletionConfetti';
import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import { reasonCategories, reasons } from '../data/reasons';

const STORAGE_KEY = 'forever-reasons-progress';
const FAVORITES_KEY = 'forever-reasons-favorites';

const unlockMessages = [
  { threshold: 10, title: 'A little gift unlocked', message: 'You\'ve only seen a small part of how much I love you.' },
  { threshold: 50, title: 'A deeper note', message: 'My heart still has more to say.' },
  { threshold: 100, title: 'The final note', message: 'You\'ve reached the end of the list... but not the end of my love.' },
];

function ReasonsPage() {
  const [discoveredIds, setDiscoveredIds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [highlightedId, setHighlightedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [unlockMessage, setUnlockMessage] = useState(null);

  useEffect(() => {
    const storedProgress = window.localStorage.getItem(STORAGE_KEY);
    const storedFavorites = window.localStorage.getItem(FAVORITES_KEY);

    if (storedProgress) {
      try {
        const parsed = JSON.parse(storedProgress);
        if (Array.isArray(parsed)) setDiscoveredIds(parsed);
      } catch {
        setDiscoveredIds([]);
      }
    }

    if (storedFavorites) {
      try {
        const parsed = JSON.parse(storedFavorites);
        if (Array.isArray(parsed)) setFavorites(parsed);
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(discoveredIds));
  }, [discoveredIds]);

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const discoveredCount = discoveredIds.length;
  const filteredReasons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return reasons.filter((reason) => {
      const matchesQuery = !query || reason.text.toLowerCase().includes(query) || reason.category.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === 'All' || reason.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const revealReason = (reasonId) => {
    setDiscoveredIds((current) => {
      if (current.includes(reasonId)) return current;
      const next = [...current, reasonId];
      const nextCount = next.length;
      const matching = unlockMessages.find((entry) => entry.threshold === nextCount);
      if (matching) setUnlockMessage({ title: matching.title, message: matching.message });
      return next;
    });

    setHighlightedId(reasonId);
  };

  const toggleFavorite = (reasonId) => {
    const reason = reasons.find((item) => item.id === reasonId);
    if (!reason) return;

    setFavorites((current) => {
      const isAlreadyFavorite = current.some((item) => item.id === reasonId);
      if (isAlreadyFavorite) {
        return current.filter((item) => item.id !== reasonId);
      }
      return [...current, { ...reason }];
    });
  };

  const openRandomReason = () => {
    const undiscovered = reasons.filter((reason) => !discoveredIds.includes(reason.id));
    if (undiscovered.length === 0) {
      setUnlockMessage({ title: 'You found them all', message: 'You\'ve reached the end of the list... but not the end of my love.' });
      return;
    }
    const randomReason = undiscovered[Math.floor(Math.random() * undiscovered.length)];
    revealReason(randomReason.id);
  };

  const removeFavorite = (reasonId) => {
    setFavorites((current) => current.filter((item) => item.id !== reasonId));
  };

  const clearHighlight = () => {
    setHighlightedId(null);
  };

  const favoriteCount = favorites.length;
  const isComplete = discoveredCount === reasons.length;

  return (
    <PageTransition>
      <main className="relative isolate overflow-hidden px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="absolute inset-0 -z-10 aurora-bg" />
        <section className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#be185d]"
          >
            <FaHeart aria-hidden="true" />
            Day 4
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: 'easeOut' }}
            className="font-display mt-6 text-5xl font-semibold text-[#351728] sm:text-6xl lg:text-7xl"
          >
            ❤️ 100 Reasons Why I Love You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6b4b5d] sm:text-xl"
          >
            “Every reason is a piece of my heart. Tap a card and discover why you’re so special to me.”
          </motion.p>
        </section>

        <section className="mx-auto mt-14 max-w-7xl space-y-6">
          <ProgressBar value={discoveredCount} total={reasons.length} />

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.75rem] border border-white/70 bg-white/60 p-4 shadow-[0_20px_70px_rgba(111,61,83,0.08)] backdrop-blur-xl">
            <div>
              <p className="text-sm font-semibold text-[#5c213d]">Your favorites</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9f5274]">{favoriteCount} saved so far</p>
            </div>
            <button
              type="button"
              onClick={() => setIsFavoritesOpen(true)}
              className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-[#be185d] outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[#be185d]"
            >
              View favorites
            </button>
          </div>

          <SearchBar
            query={searchQuery}
            selectedCategory={selectedCategory}
            categories={reasonCategories}
            onQueryChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        <section className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Love reasons gallery">
          {filteredReasons.map((reason) => {
            const isDiscovered = discoveredIds.includes(reason.id);
            const isFavorite = favorites.some((item) => item.id === reason.id);
            return (
              <ReasonCard
                key={reason.id}
                reason={reason}
                isDiscovered={isDiscovered}
                isFavorite={isFavorite}
                isHighlighted={highlightedId === reason.id}
                onDiscover={revealReason}
                onToggleFavorite={toggleFavorite}
                onAnimationComplete={clearHighlight}
              />
            );
          })}
        </section>

        {filteredReasons.length === 0 ? (
          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-white/70 bg-white/64 p-10 text-center shadow-[0_24px_80px_rgba(111,61,83,0.08)] backdrop-blur-xl">
            <p className="font-display text-3xl font-semibold text-[#421a2d]">No reasons match that search yet.</p>
            <p className="mt-3 text-base leading-7 text-[#6b4b5d]">Try another word, or simply keep exploring the cards and let your heart lead you.</p>
          </div>
        ) : null}

        <SurpriseButton onClick={openRandomReason} />
        <UnlockMessage message={unlockMessage} onDismiss={() => setUnlockMessage(null)} />
        <CompletionConfetti show={isComplete} />

        <PageNavButtons previousPath="/story" nextPath="/" previousLabel="Story" nextLabel="Home" />
      </main>

      <FavoritesModal
        isOpen={isFavoritesOpen}
        favorites={favorites}
        onClose={() => setIsFavoritesOpen(false)}
        onRemoveFavorite={removeFavorite}
      />
    </PageTransition>
  );
}

export default ReasonsPage;
