import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const {height, width, fps} = useVideoConfig();
	const duration = 4 * 30;
	const frame = useCurrentFrame();
	const offset = (height / 2) * (frame / duration);

	return (
		<AbsoluteFill
			className="bg-spotify-linear-gradient-bottom"
			style={{
				height: 1.5 * height,
				transform: `translateY(-${offset}px)`,
			}}
		/>
	);
};
