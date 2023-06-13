import {Sequence} from 'remotion';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Scene1} from './Scene1';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence durationInFrames={210}>
				<Scene1 />
			</Sequence>
			<Sequence from={210} durationInFrames={210}>
				<Scene2 />
			</Sequence>
			<Sequence from={240} durationInFrames={360}>
				<Scene3 text1="Noah" text2="lorem etc" text3="LMAOOOOO" />
			</Sequence>
		</>
	);
};
