import poster from '@/assets/images/poster.png';
import { useEffect, useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
export default function VideoMotion() {
  function usePlayerState($videoPlayer: any) {
    const [playerState, setPlayerState] = useState({
      playing: false
    });

    useEffect(() => {
      playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();
    }, [$videoPlayer, playerState.playing]);

    function toggleVideoPlay() {
      setPlayerState({
        ...playerState,
        playing: !playerState.playing
      });
    }

    return {
      playerState,
      toggleVideoPlay
    };
  }

  const $videoPlayer = useRef(null);
  const { playerState, toggleVideoPlay } = usePlayerState($videoPlayer);

  const videoUrl = 'https://www.youtube.com/watch?v=ZaYvwn9nBD4';
  return (
    <div className='w-full md:w-[657px] h-full md:h-[387px] rounded-lg'>
      <video className='z-0' ref={$videoPlayer} src={videoUrl} poster={poster.src} />
      <button
        className='z-10 absolute -mt-[250px] ml-[280px] bg-white w-[100px] h-[100px] rounded-full hidden md:flex justify-center items-center'
        onClick={toggleVideoPlay}
      >
        {playerState.playing ? (
          <>
            <PauseIcon className='w-10 h-10' />
          </>
        ) : (
          <>
            <PlayIcon className='w-10 h-10' />
          </>
        )}
      </button>
    </div>
  );
}
