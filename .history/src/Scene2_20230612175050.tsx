import {CSSProperties, FC, ReactNode} from 'react';
import {AbsoluteFill} from 'remotion';

interface BarProps {
	color: string;
	children: ReactNode;
}
const Bar: FC<BarProps> = ({color, children}) => {
	return (
		<div
			className="h-[180px] w-[180px] rounded-full my-[10px]"
			style={{backgroundColor: color}}
		>
			{children}
		</div>
	);
};
export const Scene2: FC = () => {
	return (
		<AbsoluteFill className="bg-[#d4148e]">
			<Bar color="#b2fef5"> Test </Bar>
			<Bar color="#d5f772"> Test </Bar>
			<Bar color="#4e00f9"> Test </Bar>
			<Bar color="#1e1416"> Test </Bar>
			<Bar color="#fefefe"> Test </Bar>
		</AbsoluteFill>
	);
};
