import {AbsoluteFill} from 'remotion';
import {Gradient} from './Composition';

const Scene1: React.FC = () => {
	return (
		<AbsoluteFill>
			<Gradient height={1280} />
		</AbsoluteFill>
	);
};

export default Scene1;
