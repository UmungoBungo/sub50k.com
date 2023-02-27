import { useEffect } from "react";
import { Audio, useVideoConfig, interpolate, useCurrentFrame, prefetch } from "remotion";

export const AudioPlayerComp = ({ filename, trackName, overflowBy, setAudioLoaded }: { filename: string, trackName: string, overflowBy: number, setAudioLoaded: (state: boolean) => void }) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const scrollLeft = interpolate(frame,
    [0, durationInFrames],
    [0, overflowBy],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  useEffect(() => {
    const { waitUntilDone } = prefetch(filename, {
      method: "blob-url",
    });

    waitUntilDone().then(() => {
      setAudioLoaded(true);
    });
  }, [])

  return (
    <div className="flex" style={{ marginLeft: `-${scrollLeft}px` }}>
      <Audio src={filename} volume={(f) =>
        interpolate(f, [0, 30, durationInFrames - 30, durationInFrames], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
      } />
      <div className="relative h-10 flex w-fit">
        <div className="absolute inset-0 flex items-end">
          <h2 className="text-3xl font-bold color-bg-body textOutline whitespace-nowrap">{trackName}</h2>
        </div>
        <div className="absolute inset-0 flex items-end">
          <h2 className="text-3xl font-bold color-bg-body overflow-hidden whitespace-nowrap" style={{
            width: `${frame / durationInFrames * 100}%`,
            backgroundColor: 'rgb(var(--color-bg-body))',
            color: 'rgb(var(--color-primary-main))',
          }}>{trackName}</h2>
        </div>
        <h2 className="text-3xl font-bold h-10 invisible whitespace-nowrap">{trackName}</h2>
      </div>
    </div>
  );
};