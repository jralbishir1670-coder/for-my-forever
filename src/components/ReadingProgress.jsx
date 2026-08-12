import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

export default function ReadingProgress({ estimatedTime }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setProgress(Math.min(Math.max(currentProgress, 0), 100));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] h-1.5 bg-white/40 backdrop-blur-md"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full bg-[linear-gradient(90deg,#6d233f,#b33f63,#eacb8f)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {estimatedTime && (
        <div className="fixed right-6 top-6 z-[60] flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-forever-wine shadow-sm backdrop-blur-md transition-opacity">
          <FiClock aria-hidden="true" />
          <span>{estimatedTime} min read</span>
        </div>
      )}
    </>
  );
}
