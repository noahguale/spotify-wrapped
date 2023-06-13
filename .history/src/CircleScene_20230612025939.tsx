import {AbsoluteFill, spring, useVideoConfig, useCurrentFrame} from 'remotion';
import {Gradient} from './Composition';

const CIRCLE_SIZE = 500;

const Circle = ({children}) => {
	return (
		<div className="w-[500px] h-[500px] rounded-full overflow-hidden absolute">
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
			<Circle>
				<Gradient height={500} />
			</Circle>
		</AbsoluteFill>
	);
};
