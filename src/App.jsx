import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoveLetterPage from './pages/LoveLetterPage';
import PrayerPage from './pages/PrayerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<LoveLetterPage />} />
          <Route path="/prayer" element={<PrayerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
