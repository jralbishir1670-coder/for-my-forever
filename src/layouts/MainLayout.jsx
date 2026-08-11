import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SiteFooter from '../components/SiteFooter/SiteFooter';

function MainLayout() {
  return (
    <div className="min-h-screen aurora-bg text-forever-ink">
      <Navigation />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

export default MainLayout;
