import {CSSProperties, FC, ReactNode} from 'react';
import {AbsoluteFill} from 'remotion';

interface BarProps {
	color: string;
	children: ReactNode;
}
const Bar: FC<BarProps> = ({color, children}) => {
	return (
		<div
			className="h-[180px] w-[180px] rounded-full"
			style={{backgroundColor: color}}
		>
			{children}
		</div>
	);
};
export const Scene2: FC = () => {
	return (
		<AbsoluteFill className="bg-[#d4148e]">
			<Bar color="#fff"> Test </Bar>
		</AbsoluteFill>
	);
};
