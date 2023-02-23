import { Player, PlayerRef } from "@remotion/player";
import { useRef, useState, useMemo, useEffect } from "react";
import { AudioPlayerComp } from "./audioPlayerComp";
import {
    PlayIcon, PauseIcon, BackwardIcon
} from '@heroicons/react/24/solid/index.js';


const RemotionPlayer: React.FC<{ durationInSeconds: number, filename: string, trackName: string }> = ({ durationInSeconds, filename, trackName }) => {
    const playerRef = useRef<PlayerRef>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [compWidth, setCompWidth] = useState(5);
    const fps = 30;

    const titleRef = useRef(null);

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

    const observer = useMemo(() => {
        return new ResizeObserver((entries) => {
            if (!titleRef.current) return;
            const { width } = entries[0].contentRect;
            const accountForTimer = 120
            setCompWidth(Math.round(width + accountForTimer));
        });
    }, [titleRef]);

    useEffect(() => {
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, [titleRef, observer]);

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
            <button type='button' className='bg-bg-body hover:ring-text-link focus:border-text-link focus:ring-text-link mr-2 flex h-10 w-10 items-center justify-center rounded border border-text-muted hover:ring-1 hover:ring-offset-0 focus:outline-none text-primary-main' onClick={handleTogglePlay}>{isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}</button>
            <div className="relative group">
                <Player
                    ref={playerRef}
                    component={AudioPlayerComp}
                    durationInFrames={durationInSeconds ? fps * durationInSeconds : 20}
                    compositionWidth={compWidth}
                    compositionHeight={43}
                    inputProps={{
                        filename: filename, trackName: trackName
                    }}
                    fps={fps}
                />
                <h2 ref={titleRef} className="text-3xl font-bold h-10 invisible absolute">{trackName}</h2>
                <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity">
                    <div className="h-10 flex items-end">
                        <button type='button' className='bg-bg-body hover:ring-text-link focus:border-text-link focus:ring-text-link mr-2 flex h-5 w-5 items-center justify-center rounded border border-text-muted hover:ring-1 hover:ring-offset-0 focus:outline-none text-primary-main' onClick={handleReset}><BackwardIcon className="h-3 w-3" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemotionPlayer;