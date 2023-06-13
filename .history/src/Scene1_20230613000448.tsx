import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Gradient} from './Composition';
import {Faces} from './Faces';

const Scene1: React.FC = () => {
	const {height} = useVideoConfig();

	return (
		<AbsoluteFill>
			<Gradient height={height} />
			<Faces />
		</AbsoluteFill>
	);
};

export default Scene1;
