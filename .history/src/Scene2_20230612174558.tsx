import {FC, ReactNode} from 'react';
import {AbsoluteFill} from 'remotion';

interface BarProps {
	color: string;
	children: ReactNode;
}
const Bar: FC<BarProps> = ({color, children}) => {
	return (
		<div className={`h-[180px] w-[180px] bg-[${color}] rounded-full`}>
			{children}
		</div>
	);
};
export const Scene2: FC = () => {
	return (
		<AbsoluteFill className="bg-[#d4148e]">
			<Bar color="#b2fef5"> </Bar>
		</AbsoluteFill>
	);
};
