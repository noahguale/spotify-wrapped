import {
	AbsoluteFill,
	spring,
	useVideoConfig,
	useCurrentFrame,
	interpolate,
	Img,
} from 'remotion';
import {Gradient} from './Composition';
import image1 from '../public/logo.png';
import {Image} from './Image';
import {CSSProperties, ReactNode} from 'react';

interface CircleProps {
	children: ReactNode;
	style?: CSSProperties;
}

interface TitleProps {
	children: ReactNode;
	style?: CSSProperties;
}

const Title = ({children, style}: TitleProps) => {
	return (
		<div
			className="font-gotham text-white text-4xl font-[550] text-center absolute top-[300px] w-full drop-shadow-lg"
			style={style}
		>
			{children}
		</div>
	);
};

export const Scene4: React.FC = () => {
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

	const upAnimation = spring({
		frame: frame - 40,
		fps,
		config: {
			damping: 200,
		},
	});

	const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

	const textOpacity = (() => {
		if (frame < 40) {
			return interpolate(progress, [0.9, 1], [0, 1]);
		}
		return interpolate(upAnimation, [0, 1], [1, 0]);
	})();

	const bottomTextOpacity = spring({
		frame: frame - 40 - 15,
		fps,
		config: {
			mass: 0.45,
		},
	});

	const artistTextopacity = spring({
		frame: frame - 40 - 43,
		fps,
		config: {
			mass: 0.45,
		},
	});

	return (
		<AbsoluteFill className="bg-[#4e00f9]">
			<AbsoluteFill style={{transform: `translateY(${contentTranslation}px)`}}>
				<Title style={{opacity: textOpacity}}>
					<div className="text-[60px]">Why Spotify?</div>
				</Title>
				<Title
					style={{
						top: 700,
						opacity: bottomTextOpacity,
					}}
				>
					<div className="text-[36px]">
						Joining Spotify means being part of a culture that values
						creativity, diversity, and constant learning, all of which resonate
						strongly with me
					</div>
				</Title>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
