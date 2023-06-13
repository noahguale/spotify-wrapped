import {AbsoluteFill, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const height = useVideoConfig();
	return (
		<AbsoluteFill
			className="bg-spotify-linear-gradient"
			style={{height: height * 1.5}}
		/>
	);
};
