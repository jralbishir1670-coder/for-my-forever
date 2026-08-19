import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import PageTransition from './components/PageTransition';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoveLetterPage = lazy(() => import('./pages/LoveLetterPage'));
const PrayerPage = lazy(() => import('./pages/PrayerPage'));
const FuturePage = lazy(() => import('./pages/FuturePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const StoryPage = lazy(() => import('./pages/StoryPage'));
const ReasonsPage = lazy(() => import('./pages/ReasonsPage'));
const FinalPage = lazy(() => import('./pages/FinalPage'));

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense
        fallback={
          <div className="min-h-screen grid place-items-center bg-forever-pearl text-forever-ink">
            <div>Loading…</div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/letter" element={<PageTransition><LoveLetterPage /></PageTransition>} />
            <Route path="/prayer" element={<PageTransition><PrayerPage /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
            <Route path="/story" element={<PageTransition><StoryPage /></PageTransition>} />
            <Route path="/future" element={<PageTransition><FuturePage /></PageTransition>} />
            <Route path="/reasons" element={<PageTransition><ReasonsPage /></PageTransition>} />
            <Route path="/final" element={<PageTransition><FinalPage /></PageTransition>} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
