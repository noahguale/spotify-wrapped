import {
	AbsoluteFill,
	spring,
	useVideoConfig,
	useCurrentFrame,
	interpolate,
	Img,
} from 'remotion';
import {Gradient} from './Composition';
import image1 from '../public/albusta.jpeg';
import {Image} from './Image';
import {CSSProperties, ReactNode} from 'react';

interface CircleProps {
	children: ReactNode;
	style?: CSSProperties;
}

interface TitleProps {
	children: ReactNode;
}

const CIRCLE_SIZE = 500;

const Circle = ({children, style}: CircleProps) => {
	return (
		<div
			className="w-[500px] h-[500px] rounded-full overflow-hidden absolute flex items-center justify-center"
			style={style}
		>
			{children}
		</div>
	);
};

const Title = ({children}: CircleProps) => {
	return (
		<div className="font-gotham text-white text-4xl font-semibold text-center absolute">
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

	const coverOpacity = interpolate(progress, [0.5, 1], [0, 1]);
	const coverScale = interpolate(progress, [0.7, 1], [0.5, 1]);

	return (
		<AbsoluteFill className="bg-[#4e00f9]">
			<Title>
				One song helped you <br /> through it all
			</Title>

			<Circle
				style={{
					opacity: progress,
					transform: `scale(${scale})`,
				}}
			>
				<Gradient height={500} />
			</Circle>
			<Image
				src={image1}
				style={{
					opacity: coverOpacity,
					transform: `scale(${coverScale})`,
				}}
			/>
		</AbsoluteFill>
	);
};
