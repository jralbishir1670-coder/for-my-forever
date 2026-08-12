import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoveLetterPage from './pages/LoveLetterPage';
import PrayerPage from './pages/PrayerPage';
import FuturePage from './pages/FuturePage';
import GalleryPage from './pages/GalleryPage';
import StoryPage from './pages/StoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<LoveLetterPage />} />
          <Route path="/prayer" element={<PrayerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/future" element={<FuturePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
