import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoveLetterPage from './pages/LoveLetterPage';
import PrayerPage from './pages/PrayerPage';
import ReasonsPage from './pages/ReasonsPage';
import StoryPage from './pages/StoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<LoveLetterPage />} />
          <Route path="/prayer" element={<PrayerPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/reasons" element={<ReasonsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
