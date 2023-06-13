import {AbsoluteFill, Img} from 'remotion';
import sam from '../public/samecooke.jpeg';
import weeknd from '../public/weeknd.jpeg';
export const ScalingFace: React.FC = () => {
	return (
		<AbsoluteFill className="border-[10px] border-black overflow-hidden">
			<Img src={weeknd} className="h-full absolute -left" />
		</AbsoluteFill>
	);
};
