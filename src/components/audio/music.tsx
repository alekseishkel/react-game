import React, { useEffect, useRef } from 'react';

interface MusicProps {
  isMusicPlaying: boolean;
}

const Music: React.FC<MusicProps> = ({ isMusicPlaying }) => {
  const player = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isMusicPlaying) {
      player.current.play();
    }
  }, []);

  return (
    <>
      <audio id="music" src="/audio/music.mp3" ref={player} />
      <audio id="slide-sound" src="/audio/slide-sound.mp3" />
    </>
  );
}

export default Music;