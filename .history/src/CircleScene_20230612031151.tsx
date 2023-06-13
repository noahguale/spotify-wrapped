import {
	AbsoluteFill,
	spring,
	useVideoConfig,
	useCurrentFrame,
	interpolate,
} from 'remotion';
import {Gradient} from './Composition';
import image1 from '../public/albusta.jpeg';

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
		config: {
			damping: 200,
		},
	});

	const scale = interpolate(progress, [0, 1], [4, 1]);
	return (
		<AbsoluteFill className="bg-[#4e00f9] flex items-center justify-center h-screen">
			<Circle
				style={{
					opacity: progress,
					transform: `scale(${scale})`,
				}}
			>
				<Gradient height={500} />
			</Circle>
			<img src={image1} />
		</AbsoluteFill>
	);
};
