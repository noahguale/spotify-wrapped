import {CSSProperties, FC, ReactNode} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Bar} from './Bar';

interface TitleProps {
	children: ReactNode;
	style?: CSSProperties;
}

const Title = ({children, style}: TitleProps) => {
	return (
		<div
			className="font-gotham text-white text-4xl font-[550] text-center absolute top-[200px] w-full drop-shadow-lg"
			style={style}
		>
			{children}
		</div>
	);
};

export const Scene2: FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const moveUp = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(moveUp, [0, 1], [height / 2 - 150 - 50, 0]);

	const bottomTextOpacity = spring({
		frame: frame - 40 - 15,
		fps,
		config: {
			mass: 0.45,
		},
	});

	return (
		<AbsoluteFill className="bg-[#d4148e]">
			<AbsoluteFill
				style={{
					transform: `translateY(${translateY}px)`,
				}}
			>
				<Title>Some of my favorite projects</Title>
				<div className="p-[150px]" />
				<Bar color="#b2fef5" endWidth={width / 2} rank={1} genre="test" />
				<Bar color="#d5f772" endWidth={width / 2 - 40} rank={2} genre="test" />
				<Bar color="#4e00f9" endWidth={width / 2 - 80} rank={3} genre="test" />
				<Bar color="#1e1416" endWidth={width / 2 - 120} rank={4} genre="test" />
				<Bar color="#fefefe" endWidth={width / 2 - 160} rank={5} genre="test" />

				<Title
					style={{
						top: 1150,
						fontSize: 30,
						opacity: bottomTextOpacity,
					}}
				>
					I'm a Software Engineer based currently in.
				</Title>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
