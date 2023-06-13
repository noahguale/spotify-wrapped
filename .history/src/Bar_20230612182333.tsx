import {CSSProperties, FC, ReactNode} from 'react';

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
			className="font-gotham text-white text-[35px] font-bold flex flex-row items-center text-center"
			style={style}
		>
			{children}
		</div>
	);
};

export const Bar: FC<BarProps> = ({color, endWidth, genre, rank}) => {
	return (
		<Row>
			<div
				className="h-[150px] rounded-full mt-[10px] ml-[-60px] drop-shadow-lg"
				style={{backgroundColor: color, width: endWidth + 100}}
			/>
			{rank}
			<br />
			{genre}
		</Row>
	);
};
