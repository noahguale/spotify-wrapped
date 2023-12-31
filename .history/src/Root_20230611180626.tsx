import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Gradient"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
