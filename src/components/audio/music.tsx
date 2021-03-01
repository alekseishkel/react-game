import React, { useEffect, useRef } from 'react';

const Music: React.FC = () => {
  const player = useRef<HTMLAudioElement>(null)
  
  useEffect(() => {
    player.current.play();
  }, []);

  return (
    <>
      <audio
        id="audio"
        src="/audio/music.mp3"
        autoPlay={true}
        ref={player}
      ></audio>
    </>
  );
}

export default Music;