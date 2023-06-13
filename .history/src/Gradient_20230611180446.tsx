import {FC} from 'react';
import {AbsoluteFill} from 'remotion';

interface GradientProps {}

const Gradient: FC<GradientProps> = ({}) => {
	return (
		<AbsoluteFill className="bg-gradient-to-r from-cyan-red to-blue-500" />
	);
};

export default Gradient;
