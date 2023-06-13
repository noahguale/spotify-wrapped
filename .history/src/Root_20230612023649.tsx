import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={CircleScene}
				durationInFrames={120}
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
