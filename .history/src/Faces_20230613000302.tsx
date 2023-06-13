import {AbsoluteFill, useVideoConfig} from 'remotion';
import {ScalingFace} from './ScalingFace';

export const Faces: React.FC = () => {
	const {height, width} = useVideoConfig();

	return (
		<AbsoluteFill
			style={{width: width / 2, height: height / 2, transform: `scaleX(-1)`}}
		>
			<AbsoluteFill>
				<ScalingFace />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
