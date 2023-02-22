import { Audio, staticFile, useVideoConfig, interpolate } from "remotion";
// conformist_inhale
export const MyComposition = ({ trackName }: { trackName: string }) => {
  const { durationInFrames } = useVideoConfig();
  return (<Audio src={staticFile(trackName)} volume={(f) =>
    interpolate(f, [0, 30, durationInFrames - 30, durationInFrames], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  } />);
};