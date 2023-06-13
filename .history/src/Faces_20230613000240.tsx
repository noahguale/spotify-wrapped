import {AbsoluteFill, useVideoConfig} from 'remotion';
import {ScalingFace} from './ScalingFace';

export const Faces: React.FC = () => {
	const {height, width} = useVideoConfig();

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<ScalingFace />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
