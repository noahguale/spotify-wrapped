import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Gradient} from './Composition';

const Scene1: React.FC = () => {
	const {height} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Gradient height={height} />
		</AbsoluteFill>
	);
};

export default Scene1;
