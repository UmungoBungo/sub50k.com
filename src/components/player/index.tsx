import { Player, PlayerRef } from "@remotion/player";
import { useRef, useState } from "react";
import { MyComposition } from "./myComposition";
import {
    PlayIcon, PauseIcon
} from '@heroicons/react/24/solid/index.js';

{/* 
Should receive the track name to be retrieved from public folder
should receive the duration of the track
should pass duration through inputProps
*/}

const RemotionPlayer: React.FC = () => {
    const durationInSeconds = 30;
    const playerRef = useRef<PlayerRef>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const fps = 30;

    function handleTogglePlay(event: React.MouseEvent<HTMLButtonElement>) {
        if (!playerRef.current) return
        event.stopPropagation();
        if (isPlaying) {
            playerRef.current.pause();
            setIsPlaying(false);
        } else {
            playerRef.current.play();
            setIsPlaying(true);
        }
    }
    return (
        <div>
            <Player
                ref={playerRef}
                component={MyComposition}
                durationInFrames={fps * durationInSeconds}
                compositionWidth={1}
                compositionHeight={1}
                style={{ display: 'none' }}
                inputProps={{ trackName: "conformist_inhale.m4a" }}
                fps={fps}
            />
            <button type='button' className='bg-primary hover:ring-primary focus:border-code focus:ring-primary mr-2 flex h-10 w-10 items-center justify-center rounded border border-gray-500 hover:ring-1 hover:ring-offset-0 focus:outline-none text-primary-main' onClick={handleTogglePlay}>{isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}</button>
        </div>
    );
};

export default RemotionPlayer;