import {CSSProperties, FC, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

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
	const opacity = interpolate(frame - (TOTAL_RANKS - rank) * 3, [0, 8], [0, 1]);

	return (
		<Row>
			<div
				className="h-[150px] rounded-full mt-[10px] ml-[-60px] drop-shadow-lg"
				style={{backgroundColor: color, width: endWidth + 100, opacity}}
			/>
			<div className="ml-8">
				{rank}
				<br />
				{genre}
			</div>
		</Row>
	);
};
