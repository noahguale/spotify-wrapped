import {AbsoluteFill, Img} from 'remotion';
import sam from '../public/samecooke.jpeg';

export const ScalingFace: React.FC = () => {
	return (
		<AbsoluteFill className="border-[10px] border-black overflow-hidden">
			<Img src={sam} className="aboslute -left-1" />
		</AbsoluteFill>
	);
};
