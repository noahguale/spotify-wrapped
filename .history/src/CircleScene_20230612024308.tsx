import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {Gradient} from './Composition';

const Circle = () => {
	return (
		<div className="w-[500px] h-[500px] bg-white rounded-full overflow-hidden" />
	);
};

export const CircleScene = () => {
	const {height, width, fps} = useVideoConfig();
	const duration = 4 * 30;
	const frame = useCurrentFrame();
	const offset = (height / 2) * (frame / duration);

	return (
		<AbsoluteFill
			className="bg-[#4e00f9]"
			style={{
				height: 1.5 * height,
				transform: `translateY(-${offset}px)`,
			}}
		>
			<Circle>
				<Gradient />
			</Circle>
		</AbsoluteFill>
	);
};
