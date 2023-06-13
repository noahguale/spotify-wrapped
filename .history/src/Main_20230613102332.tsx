import {Sequence} from 'remotion';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Scene1} from './Scene1';

export const Main: React.FC = () => {
	const sources = ['samcooke.jpeg', 'whitney.jpg', 'joe.jpg', 'drake.jpeg'];

	return (
		<>
			<Sequence durationInFrames={210}>
				<Scene1 sources={sources} />
			</Sequence>
			<Sequence from={210} durationInFrames={450}>
				<Scene2 />
			</Sequence>
			<Sequence from={450} durationInFrames={570}>
				<Scene3 text1="Noah" text2="lorem etc" text3="LMAOOOOO" />
			</Sequence>
		</>
	);
};
