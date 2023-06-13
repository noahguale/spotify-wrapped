import {Sequence} from 'remotion';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Scene1} from './Scene1';
import {Scene4} from './Scene4';

export const Main: React.FC = () => {
	const sources = ['samcooke.jpeg', 'whitney.jpg', 'joe.jpg', 'drake.jpeg'];

	return (
		<>
			<Sequence durationInFrames={240}>
				<Scene1 sources={sources} />
			</Sequence>
			<Sequence from={240} durationInFrames={300}>
				<Scene3 text1="Noah" text2="Chicago" text3="LMAOOOOO" />
			</Sequence>
			<Sequence from={340 + 240} durationInFrames={360 + 240 + 120}>
				<Scene2 />
			</Sequence>

			<Sequence
				from={360 + 240 + 120 + 120}
				durationInFrames={360 + 240 + 120 + 120}
			>
				<Scene4 />
			</Sequence>
		</>
	);
};
