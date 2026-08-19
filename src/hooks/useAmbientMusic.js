import { useEffect, useMemo, useState } from 'react';

export default function useAmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.65);

  const audio = useMemo(() => {
    const player = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    player.loop = true;
    player.preload = 'none';
    player.crossOrigin = 'anonymous';
    return player;
  }, []);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch(() => {
        // User interaction may be required before playing audio.
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audio, isPlaying]);

  const toggle = () => setIsPlaying((current) => !current);

  return {
    isPlaying,
    volume,
    setVolume,
    toggle,
  };
}
