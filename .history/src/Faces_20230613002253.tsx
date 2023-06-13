import {AbsoluteFill, useVideoConfig} from 'remotion';
import {ScalingFace} from './ScalingFace';

export const Faces: React.FC = () => {
	const {height, width} = useVideoConfig();

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{width: width / 2, height: height / 2, transform: `scaleX(-1)`}}
			>
				<ScalingFace />
			</AbsoluteFill>

			<AbsoluteFill
				style={{width: width / 2, height: height / 2, left: width / 2}}
			>
				<ScalingFace />
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					width: width / 2,
					height: height / 2,
					top: height / 2,
				}}
			>
				<ScalingFace />
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					width: width / 2,
					height: height / 2,
					left: width / 2,
					top: height / 2,
					transform: `scaleY(-1)`,
				}}
			>
				<ScalingFace />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
