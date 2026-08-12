import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiStar, FiHeart } from 'react-icons/fi';
import FavoritesModal from '../components/FavoritesModal/FavoritesModal.jsx';
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';
import ReasonCard from '../components/ReasonCard/ReasonCard.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import SurpriseButton from '../components/SurpriseButton/SurpriseButton.jsx';
import UnlockMessage from '../components/UnlockMessage/UnlockMessage.jsx';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { reasonCategories, reasons } from '../data/reasons.js';

const milestoneMessages = {
  10: {
    title: 'Warm beginnings',
    message: "You've only seen a small part of how much I love you.",
  },
  50: {
    title: 'Halfway happiness',
    message: 'My heart still has more to say.',
  },
  100: {
    title: 'Forever found',
    message: "You've reached the end of the list... but not the end of my love.",
  },
};

const confettiPieces = Array.from({ length: 12 }, (_, index) => index + 1);

export default function ReasonsPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [discovered, setDiscovered] = useLocalStorage('day4-discovered', []);
  const [favorites, setFavorites] = useLocalStorage('day4-favorites', []);
  const [seenMilestones, setSeenMilestones] = useLocalStorage('day4-milestones', []);
  const [activeUnlock, setActiveUnlock] = useState(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [highlightedId, setHighlightedId] = useState(null);

  const discoveredSet = useMemo(() => new Set(discovered), [discovered]);
  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  const filteredReasons = useMemo(() => {
    return reasons.filter((reason) => {
      const matchesQuery = query.length === 0 || reason.text.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || reason.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  const discoveredCount = discoveredSet.size;
  const favoriteReasons = useMemo(
    () => reasons.filter((reason) => favoritesSet.has(reason.id)),
    [favoritesSet],
  );

  const revealReason = (reasonId) => {
    if (discoveredSet.has(reasonId)) {
      setHighlightedId(reasonId);
      return;
    }

    setDiscovered((current) => [...new Set([...current, reasonId])]);
    setHighlightedId(reasonId);
  };

  const toggleFavorite = (reasonId) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(reasonId)) {
        next.delete(reasonId);
      } else {
        next.add(reasonId);
      }
      return [...next];
    });
  };

  const openRandomReason = () => {
    const unopened = reasons.filter((reason) => !discoveredSet.has(reason.id));
    const pool = unopened.length > 0 ? unopened : reasons;
    const choice = pool[Math.floor(Math.random() * pool.length)];
    revealReason(choice.id);
  };

  useEffect(() => {
    const nextMessage = [10, 50, 100].find((amount) => discoveredCount >= amount && !seenMilestones.includes(amount));
    if (!nextMessage) {
      return;
    }

    setActiveUnlock(milestoneMessages[nextMessage]);
    setSeenMilestones((current) => [...new Set([...current, nextMessage])]);
  }, [discoveredCount, seenMilestones, setSeenMilestones]);

  useEffect(() => {
    if (!highlightedId) {
      return undefined;
    }

    const card = document.getElementById(`reason-${highlightedId}`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const timeout = window.setTimeout(() => {
      setHighlightedId(null);
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, [highlightedId]);

  return (
    <main className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,225,194,0.45),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(179,63,99,0.14),transparent_20%),#fff9f4] px-5 pb-28 pt-28 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle,rgba(255,234,221,0.8),transparent_38%)]" />
      <div className="mx-auto grid max-w-7xl gap-12">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 p-8 shadow-luxury backdrop-blur-2xl sm:p-10">
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle,rgba(234,203,143,0.35),transparent_45%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-forever-rose">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forever-rose/10 text-forever-rose shadow-[0_10px_30px_rgba(179,63,99,0.12)]">
                  <FiHeart aria-hidden="true" />
                </span>
                Day 4: 100 Reasons Why I Love You
              </p>
              <div className="space-y-4">
                <h1 className="font-display text-5xl font-semibold tracking-[-0.04em] text-[#351728] sm:text-6xl">
                  ❤️ 100 Reasons Why I Love You
                </h1>
                <p className="max-w-2xl text-base leading-8 text-forever-ink/75 sm:text-lg">
                  Every reason is a piece of my heart. Tap a card and discover why you're so special to me.
                </p>
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-[#f3dbe5] bg-[#fffaf0]/85 p-6 shadow-[0_24px_70px_rgba(109,35,63,0.12)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forever-rose/90">Today&apos;s discovery</p>
                  <p className="mt-2 text-3xl font-semibold text-forever-wine">{discoveredCount}/100</p>
                </div>
                <div className="rounded-full bg-white/85 px-4 py-3 text-sm font-semibold text-forever-ink shadow-sm">
                  {favoriteReasons.length} favorites
                </div>
              </div>
              <p className="text-sm leading-7 text-forever-ink/75">
                Each card is a little gift — soft, luxurious, and made to remind you how deeply you are loved.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setIsFavoritesOpen(true)}
                  className="inline-flex items-center justify-center rounded-full border border-forever-rose bg-white px-4 py-3 text-sm font-semibold text-forever-wine transition hover:bg-forever-rose/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-forever-rose/20"
                >
                  <FiStar aria-hidden="true" className="mr-2" />
                  View Favorites
                </button>
                <p className="text-sm text-forever-ink/65">
                  Save your favorite reasons and revisit them whenever your heart needs a little extra warmth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <SearchBar
              query={query}
              selectedCategory={selectedCategory}
              categories={reasonCategories}
              onQueryChange={setQuery}
              onCategoryChange={setSelectedCategory}
            />

            <ProgressBar value={discoveredCount} total={100} />
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-[#f3dbe5] bg-white/90 p-6 shadow-[0_24px_70px_rgba(109,35,63,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forever-rose/90">How it works</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-forever-ink/75">
                <li>• Tap a card to flip it and reveal a reason.</li>
                <li>• Mark favorites to keep the love notes close.</li>
                <li>• Unlock gentle surprises every 10 discoveries.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-[#f3dbe5] bg-[#fff7f2]/90 p-6 shadow-[0_24px_70px_rgba(109,35,63,0.1)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forever-rose/90">Need a nudge?</p>
              <p className="mt-3 text-base leading-7 text-forever-ink/80">
                The surprise button selects a reason for you and gently brings it into view. A little gift when you want a quick reflection.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filteredReasons.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-[2rem] p-10 text-center"
              >
                <p className="text-sm uppercase tracking-[0.26em] text-forever-rose/80">No matches found</p>
                <p className="mt-4 text-xl font-semibold text-forever-ink">Try another keyword or category.</p>
              </motion.div>
            ) : (
              filteredReasons.map((reason) => (
                <ReasonCard
                  key={reason.id}
                  reason={reason}
                  isDiscovered={discoveredSet.has(reason.id)}
                  isFavorite={favoritesSet.has(reason.id)}
                  isHighlighted={highlightedId === reason.id}
                  onDiscover={revealReason}
                  onToggleFavorite={toggleFavorite}
                />
              ))
            )}
          </AnimatePresence>
        </section>
      </div>

      <AnimatePresence>
        {activeUnlock ? (
          <UnlockMessage
            message={activeUnlock}
            onDismiss={() => setActiveUnlock(null)}
          />
        ) : null}
      </AnimatePresence>

      <FavoritesModal
        isOpen={isFavoritesOpen}
        favorites={favoriteReasons}
        onClose={() => setIsFavoritesOpen(false)}
        onRemoveFavorite={(id) => toggleFavorite(id)}
      />

      <SurpriseButton onClick={openRandomReason} />

      {discoveredCount === 100 && (
        <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
          {confettiPieces.map((index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -20, rotate: 0 }}
              animate={{ opacity: [0.8, 1, 0.2], y: [0, 120, 260], rotate: [0, 45, 90] }}
              transition={{ duration: 3.2, delay: index * 0.12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[calc(8%*var(--i))] top-0 h-3 w-3 rounded-full bg-forever-rose/90"
              style={{ ['--i']: index }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
