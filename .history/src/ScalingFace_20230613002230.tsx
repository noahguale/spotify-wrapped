import {AbsoluteFill, Img} from 'remotion';
import sam from '../public/samecooke.jpeg';
import weeknd from '../oublic/weeknd.jpeg';
export const ScalingFace: React.FC = () => {
	return (
		<AbsoluteFill className="border-[10px] border-black overflow-hidden">
			<Img src={sam} className="w-full absolute -left" />
		</AbsoluteFill>
	);
};
