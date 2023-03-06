import { useEffect } from "react";
import { Audio, useVideoConfig, interpolate, useCurrentFrame, prefetch } from "remotion";

export const AudioPlayerComp = ({ cloudinaryPath, trackName, overflowBy, setAudioLoaded }: { cloudinaryPath: string, trackName: string, overflowBy: number, setAudioLoaded: (state: boolean) => void }) => {
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

  console.log('overflowBy', overflowBy)

  const trackUrl = `https://res.cloudinary.com/sub50k/video/upload/f_auto,q_auto:best/${cloudinaryPath}`

  useEffect(() => {
    const { waitUntilDone } = prefetch(trackUrl, {
      method: "blob-url",
    });

    waitUntilDone().then(() => {
      setAudioLoaded(true);
    });
  }, [])

  return (
    <div className="flex" style={{ marginLeft: `-${scrollLeft}px` }}>
      <Audio src={trackUrl} volume={(f) =>
        interpolate(f, [0, 60, durationInFrames - 60, durationInFrames], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
      } />
      <div className="relative h-10 flex w-fit">
        <div className="absolute inset-0 flex items-end">
          <h2 className="text-3xl font-bold text-bg-body textOutline whitespace-nowrap">{trackName}</h2>
        </div>
        <div className="absolute inset-0 flex items-end">
          <h2 className="text-3xl font-bold text-primary-main bg-bg-body overflow-hidden whitespace-nowrap" style={{
            width: `${frame / durationInFrames * 100}%`,
          }}>{trackName}</h2>
        </div>
        <h2 className="text-3xl font-bold h-10 invisible whitespace-nowrap">{trackName}</h2>
      </div>
    </div>
  );
};