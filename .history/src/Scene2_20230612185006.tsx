import {CSSProperties, FC, ReactNode} from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Bar} from './Bar';

// Interface BarProps {
//   color: string;
//   children: ReactNode;
//   endWidth: number
// }

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
	const {width} = useVideoConfig();

	return (
		<AbsoluteFill className="bg-[#d4148e]">
			<Title>Your top genres were</Title>
			<div className="p-[150px]" />
			<Bar color="#b2fef5" endWidth={width / 2} rank={1} genre="test" />
			<Bar color="#d5f772" endWidth={width / 2 - 40} rank={2} genre="test" />
			<Bar color="#4e00f9" endWidth={width / 2 - 80} rank={3} genre="test" />
			<Bar color="#1e1416" endWidth={width / 2 - 120} rank={4} genre="test" />
			<Bar color="#fefefe" endWidth={width / 2 - 160} rank={5} genre="test" />
		</AbsoluteFill>
	);
};
