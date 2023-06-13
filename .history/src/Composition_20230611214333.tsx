import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const height = useVideoConfig();
	const duration = 4 * 30;
	const frame = useCurrentFrame();
	const offset = (height / 2) * (frame / duration);

	return (
		<AbsoluteFill
			className="bg-spotify-linear-gradient"
			style={{
				height: height * 1.5,
				transform: `translateY(-${offset})px`,
			}}
		/>
	);
};
