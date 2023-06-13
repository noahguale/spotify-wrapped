import {AbsoluteFill, Img} from 'remotion';
import sam from '../public/samecooke.jpeg';

export const ScalingFace: React.FC = () => {
	return (
		<AbsoluteFill className="bg-red-500 border-[10px] border-black">
			<Img src={sam}> </Img>
		</AbsoluteFill>
	);
};
