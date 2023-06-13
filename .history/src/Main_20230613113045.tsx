import {Sequence} from 'remotion';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Scene1} from './Scene1';

export const Main: React.FC = () => {
	const sources = ['samcooke.jpeg', 'whitney.jpg', 'joe.jpg', 'drake.jpeg'];

	return (
		<>
			<Sequence durationInFrames={360}>
				<Scene1 sources={sources} />
			</Sequence>
			<Sequence from={360} durationInFrames={360 + 240}>
				<Scene3 text1="Noah" text2="Chicago" text3="LMAOOOOO" />
			</Sequence>
			<Sequence from={450} durationInFrames={800}>
				<Scene2 />
			</Sequence>
		</>
	);
};
