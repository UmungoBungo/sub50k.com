import type { PlayerRef } from "@remotion/player";
import { toHHMMSS } from './utils/toHHMMSS';
import { useCurrentPlayerFrame } from './use-current-player-frame';
import type { RefObject } from "react";

const PlayTime: React.FC<{ playerRef: RefObject<PlayerRef>, durationInFrames: number, startFromInSeconds: number }> = ({ playerRef, durationInFrames, startFromInSeconds }) => {
	const frame = useCurrentPlayerFrame(playerRef);
	return (
		<div className="text-default flex font-mono text-xs font-medium">
			<span className="flex w-10 justify-center">{toHHMMSS(startFromInSeconds + Math.round(frame / 30))}</span>
			<span className="flex w-4 justify-center text-center">/</span>
			<span className="flex w-10 justify-center">
				{toHHMMSS(startFromInSeconds + durationInFrames / 30)}
			</span>
		</div>
	);
};

export { PlayTime };
