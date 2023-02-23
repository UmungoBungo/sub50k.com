import { Player, PlayerRef } from "@remotion/player";
import { useRef, useState, useEffect } from "react";
import { MyComposition } from "./myComposition";
import {
    PlayIcon, PauseIcon, BackwardIcon
} from '@heroicons/react/24/solid/index.js';


const RemotionPlayer: React.FC<{ durationInSeconds: number, filename: string, trackName: string }> = ({ durationInSeconds, filename, trackName }) => {
    const playerRef = useRef<PlayerRef>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const fps = 30;

    useEffect(() => {
        const { current } = playerRef;
        if (!current) {
            return;
        }

        const pauseListener = () => {
            setIsPlaying(false)
        };

        const playListener = () => {
            setIsPlaying(true)
        };
        current.addEventListener("pause", pauseListener);
        current.addEventListener("play", playListener)
        return () => {
            current.removeEventListener("pause", pauseListener);
            current.removeEventListener("play", playListener)
        };
    }, []);

    function handleTogglePlay(event: React.MouseEvent<HTMLButtonElement>) {
        if (!playerRef.current) return
        event.stopPropagation();
        if (isPlaying) {
            playerRef.current.pause();
        } else {
            playerRef.current.play();
        }
    }

    function handleReset(event: React.MouseEvent<HTMLButtonElement>) {
        if (!playerRef.current) return
        event.stopPropagation();
        playerRef.current.seekTo(0);
    }

    return (
        <div className="flex not-prose items-center">
            {/* is playing state needs to reference playerRef, as pause button remains in place when audio is finished */}
            <button type='button' className='bg-primary hover:ring-primary focus:border-code focus:ring-primary mr-2 flex h-10 w-10 items-center justify-center rounded border border-gray-500 hover:ring-1 hover:ring-offset-0 focus:outline-none text-primary-main' onClick={handleTogglePlay}>{isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}</button>


            <div className="relative group">
                <Player
                    ref={playerRef}
                    component={MyComposition}
                    durationInFrames={fps * durationInSeconds}
                    compositionWidth={500}
                    compositionHeight={43}
                    inputProps={{
                        filename: filename, trackName: trackName
                    }}
                    fps={fps}
                />
                <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity">
                    <div className="h-10 flex items-end">
                        <button type='button' className='bg-primary hover:ring-primary focus:border-code focus:ring-primary mr-2 flex h-5 w-5 items-center justify-center rounded border border-gray-500 hover:ring-1 hover:ring-offset-0 focus:outline-none text-primary-main' onClick={handleReset}><BackwardIcon className="h-3 w-3" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemotionPlayer;