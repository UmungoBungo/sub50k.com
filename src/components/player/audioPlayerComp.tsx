import { Audio, useVideoConfig, interpolate, useCurrentFrame } from "remotion";

export const AudioPlayerComp = ({ filename, trackName }: { filename: string, trackName: string }) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  function toHHMMSS(sec_num: number) {
    var minutes = Math.floor((sec_num - Math.floor(sec_num / 3600) * 3600) / 60);
    var seconds = sec_num - Math.floor(sec_num / 3600) * 3600 - minutes * 60;

    let minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();
    let secondsString = seconds < 10 ? `0${seconds}` : seconds.toString();
    return `${minutesString}:${secondsString}`;
  }

  return (
    <div className="flex">
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