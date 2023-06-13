import {Composition} from 'remotion';
import {Gradient} from './Composition';
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
				id="Cirlce"
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
