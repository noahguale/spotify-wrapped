import {CSSProperties, FC, ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

interface BarProps {
	color: string;
	endWidth: number;
	rank: number;
	genre: string;
}

interface RowProps {
	children: ReactNode;
	style?: CSSProperties;
}

const Row = ({children, style}: RowProps) => {
	return (
		<div
			className="font-gotham text-white text-[28px] font-medium drop-shadow-lg flex flex-row items-center text-center"
			style={style}
		>
			{children}
		</div>
	);
};

const TOTAL_RANKS = 5;

export const Bar: FC<BarProps> = ({color, endWidth, genre, rank}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const opacity = interpolate(
		frame - (TOTAL_RANKS - rank) * 3 - 10,
		[0, 12],
		[0, 1]
	);

	const animatedWidthProgress = spring({
		frame: frame - 60 - rank * 3,
		fps,
		config: {
			damping: 200,
		},
	});

	const animatedWidth = interpolate(
		animatedWidthProgress,
		[0, 1],
		[150, endWidth + 100]
	);

	const left = interpolate(
		animatedWidthProgress,
		[0, 1],
		[width / 2 - 150 / 2, -60]
	);

	const labelProgress = spring({
		frame: frame - 90 - rank * 20,
		fps,
		config: {
			damping: 200,
			mass: 0.6,
		},
	});

	return (
		<Row>
			<div
				className="h-[150px] rounded-full mt-[10px] drop-shadow-lg"
				style={{
					backgroundColor: color,
					width: animatedWidth,
					opacity,
					marginLeft: left,
				}}
			/>
			<div style={{width: 40}} />
			<div
				style={{
					opacity: labelProgress,
					transform: `translateY(${interpolate(
						labelProgress,
						[0, 1],
						[40, 0]
					)}px)`,
				}}
			>
				#{rank} <br />
				<div className="text-[30px]">{genre}</div>
			</div>{' '}
		</Row>
	);
};
