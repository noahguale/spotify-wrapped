import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {CircleScene} from './CircleScene';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Gradient"
				component={MyComposition}
				durationInFrames={120}
				fps={30}
				width={720}
				height={1280}
			/>
			<Composition
				id="Cirlce"
				component={CircleScene}
				durationInFrames={120}
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
