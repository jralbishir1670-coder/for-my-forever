import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { navigationLinks } from '../constants/navigation';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-full border border-white/80 bg-white/75 px-2.5 py-2 shadow-[0_18px_70px_rgba(109,35,63,0.16)] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(234,203,143,0.9),transparent)] sm:px-4 sm:py-2.5"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="group relative z-10 inline-flex items-center gap-3 rounded-full py-1 pl-1 pr-2 font-display text-lg font-semibold tracking-wide text-forever-wine transition duration-300 hover:bg-white/50 hover:shadow-[0_10px_24px_rgba(109,35,63,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-forever-rose sm:pr-4 sm:text-xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6d233f,#b33f63)] text-white shadow-[0_10px_24px_rgba(109,35,63,0.28)] ring-1 ring-white/70 transition duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_28px_rgba(109,35,63,0.32)]">
            <FiHeart aria-hidden="true" size={15} />
          </span>
          <span className="leading-none">
            <span className="block">For My Forever</span>
            <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.28em] text-forever-rose/70 sm:block">
              Birthday reveal
            </span>
          </span>
        </Link>

        <div className="relative z-10 hidden items-center rounded-full border border-white/65 bg-white/40 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) => `group relative rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:text-forever-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-forever-rose ${isActive ? 'text-forever-wine' : 'text-forever-ink/70'}`}
            >
              <span className="absolute inset-0 scale-90 rounded-full bg-white/80 opacity-0 shadow-[0_10px_28px_rgba(109,35,63,0.1)] transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative">{link.label}</span>
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/80 text-forever-wine shadow-[0_10px_28px_rgba(109,35,63,0.12)] transition duration-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(109,35,63,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-forever-rose lg:hidden"
        >
          {isOpen ? (
            <FiX aria-hidden="true" size={22} />
          ) : (
            <FiMenu aria-hidden="true" size={22} />
          )}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/92 p-3 shadow-[0_20px_60px_rgba(109,35,63,0.14)] backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto mb-2 h-px w-4/5 gold-line" />
          <div className="grid gap-1">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: index * 0.035, ease: 'easeOut' }}
              >
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => `group flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 hover:bg-forever-blush/50 hover:text-forever-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-forever-rose ${isActive ? 'bg-forever-blush/50 text-forever-wine' : 'text-forever-ink/80'}`}
                >
                  <span>{link.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-forever-champagne opacity-0 transition group-hover:opacity-100" />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navigation;
