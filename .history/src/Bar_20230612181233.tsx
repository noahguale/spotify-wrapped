import {FC, ReactNode} from 'react';

interface BarProps {
	color: string;
	children: ReactNode;
	endWidth: number;
}

export const Bar: FC<BarProps> = ({color, children, endWidth}) => {
	return (
		<div
			className="h-[150px] rounded-full mt-[10px] ml-[-60px] drop-shadow-lg"
			style={{backgroundColor: color, width: endWidth + 100}}
		>
			{children}
		</div>
	);
};
