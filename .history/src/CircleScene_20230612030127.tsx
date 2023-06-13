import {AbsoluteFill, spring, useVideoConfig, useCurrentFrame} from 'remotion';
import {Gradient} from './Composition';

const CIRCLE_SIZE = 500;

const Circle = ({children, style}) => {
	return (
		<div
			className="w-[500px] h-[500px] rounded-full overflow-hidden absolute"
			style={style}
		>
			{children}
		</div>
	);
};

export const CircleScene = () => {
	const {height, width, fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		frame,
		fps,
	});
	return (
		<AbsoluteFill className="bg-[#4e00f9] flex items-center justify-center h-screen">
			<Circle
				style={{
					opacity: progress,
				}}
			>
				<Gradient height={500} />
			</Circle>
		</AbsoluteFill>
	);
};
