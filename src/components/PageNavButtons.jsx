import { Link } from 'react-router-dom';

function PageNavButtons({ previousPath, nextPath, previousLabel = 'Previous', nextLabel = 'Next' }) {
  return (
    <div className="mx-auto mt-10 flex max-w-5xl items-center justify-between gap-3 px-1 sm:px-0">
      {previousPath ? (
        <Link
          to={previousPath}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2.5 text-sm font-semibold text-forever-wine shadow-sm outline-none transition hover:bg-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-forever-rose focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">←</span>
          <span>{previousLabel}</span>
        </Link>
      ) : (
        <span />
      )}

      {nextPath ? (
        <Link
          to={nextPath}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#6d233f,#b33f63)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(109,35,63,0.2)] outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-forever-rose focus-visible:ring-offset-2"
        >
          <span>{nextLabel}</span>
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}

export default PageNavButtons;
