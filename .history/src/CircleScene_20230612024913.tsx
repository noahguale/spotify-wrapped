import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {Gradient} from './Composition';

const CIRCLE_SIZE = 500;

const Circle = ({children}) => {
	return (
		<div className="w-[500px] h-[500px] bg-white rounded-full overflow-hidden absolute">
			{children}
		</div>
	);
};

export const CircleScene = () => {
	const duration = 4 * 30;
	const frame = useCurrentFrame();
	const offset = (height / 2) * (frame / duration);

	return (
		<AbsoluteFill className="bg-[#4e00f9]">
			<Circle>
				<Gradient height={500} />
			</Circle>
		</AbsoluteFill>
	);
};
