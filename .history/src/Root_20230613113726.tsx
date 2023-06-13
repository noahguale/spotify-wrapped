import {Composition} from 'remotion';
import {Gradient} from './Composition';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import './style.css';
import {Main} from './Main';
import {Scene1} from './Scene1';

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
				id="Scene1"
				component={Scene1}
				durationInFrames={360}
				fps={30}
				width={720}
				height={1280}
				defaultProps={{
					sources: ['samcooke.jpeg', 'whitney.jpg', 'joe.jpg', 'drake.jpeg'],
				}}
			/>
			<Composition
				id="Scene2"
				component={Scene2}
				durationInFrames={240}
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
			<Composition
				id="Main"
				component={Main}
				durationInFrames={1000}
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
