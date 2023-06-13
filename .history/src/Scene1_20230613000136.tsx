import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Gradient} from './Composition';
import {ScalingFace} from './ScalingFace';

const Scene1: React.FC = () => {
	const {height} = useVideoConfig();

	return (
		<AbsoluteFill>
			<Gradient height={height} />
			<ScalingFace />
		</AbsoluteFill>
	);
};

export default Scene1;
