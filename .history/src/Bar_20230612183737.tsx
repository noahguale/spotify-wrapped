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

	return (
		<Row>
			<div
				className="h-[150px] rounded-full mt-[10px] ml-[-60px] drop-shadow-lg"
				style={{backgroundColor: color, width: animatedWidth, opacity}}
			/>
			<div className="ml-8">
				{rank}
				<br />
				{genre}
			</div>
		</Row>
	);
};
