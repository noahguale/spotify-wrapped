import {FC} from 'react';
import {AbsoluteFill} from 'remotion';

const Bar = () => {
	return (
		<div className="h-[150px] w-[150px] bg-white rounded-[150px]">test</div>
	);
};
export const Scene2: FC = () => {
	return (
		<AbsoluteFill className="bg-[#d4148e]">
			<Bar />
		</AbsoluteFill>
	);
};
