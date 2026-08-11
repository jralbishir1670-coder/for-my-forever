import { FiPause, FiPlay, FiVolume2 } from 'react-icons/fi';
import { useAmbientMusic } from '../../hooks/useAmbientMusic.js';

export default function MusicPlayer() {
  const { isPlaying, volume, setVolume, toggle } = useAmbientMusic();

  return (
    <aside className="fixed bottom-5 left-5 z-40 max-w-[calc(100vw-2.5rem)] rounded-[1.25rem] border border-white/70 bg-white/78 p-3 shadow-[0_18px_55px_rgba(111,61,83,0.14)] backdrop-blur-2xl" aria-label="Music controls">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#be185d] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#be185d] focus-visible:ring-offset-4"
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          {isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" className="ml-0.5" />}
        </button>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#421a2d]">Forever Softly</p>
          <div className="mt-1 flex items-center gap-2">
            <FiVolume2 className="shrink-0 text-[#8f496a]" aria-hidden="true" />
            <label className="sr-only" htmlFor="music-volume">Music volume</label>
            <input
              id="music-volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              className="w-28 accent-[#be185d]"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
