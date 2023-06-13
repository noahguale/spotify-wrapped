import {Composition} from 'remotion';
import {Gradient} from './Composition';
import {Scene2} from './Scene2';
import {Scene3} from './CircleScene';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Gradient"
				component={Gradient}
				durationInFrames={120}
				fps={30}
				width={720}
				height={1280}
			/>
			<Composition
				id="Scene2"
				component={Scene2}
				durationInFrames={120}
				fps={30}
				width={720}
				height={1280}
			/>
			<Composition
				id="Scene3"
				component={Scene3}
				durationInFrames={120}
				fps={30}
				width={720}
				height={1280}
				defaultProps={{
					text1: 'Noah Guale',
					text2: 'Test',
					text3: 'Test',
				}}
			/>
		</>
	);
};
