import {AbsoluteFill, Img} from 'remotion';
import sam from '../public/samecooke.jpeg';

export const ScalingFace: React.FC = () => {
	return (
		<AbsoluteFill className="border-[10px] border-black">
			<img src={sam}> </img>
		</AbsoluteFill>
	);
};
