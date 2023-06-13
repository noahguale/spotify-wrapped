import {
	AbsoluteFill,
	spring,
	useVideoConfig,
	useCurrentFrame,
	interpolate,
	Img,
} from 'remotion';
import {Gradient} from './Composition';
import image1 from '../public/profile-header.png';
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

const CIRCLE_SIZE = 500;

const Circle = ({children, style}: CircleProps) => {
	return (
		<div
			className="w-[500px] h-[500px] rounded-full overflow-hidden absolute"
			style={style}
		>
			{children}
		</div>
	);
};

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

export const Scene3: React.FC<{
	text1: string;
	text2: string;
	text3: string;
}> = ({text1, text2, text3}) => {
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
					Hello <br /> My name is Noah
				</Title>
				<Title style={{top: 1030, fontSize: 25, opacity: artistTextopacity}}>
					{text1}
				</Title>
				<Title
					style={{
						top: 1100,
						fontSize: 40,
						opacity: bottomTextOpacity,
					}}
				>
					Your top song of the year is {text2}.
				</Title>

				<div className="flex items-center justify-center h-screen">
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
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
