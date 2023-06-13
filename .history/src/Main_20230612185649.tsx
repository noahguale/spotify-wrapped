import {Sequence} from 'remotion';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence from={210} durationInFrames={210}>
				<Scene2 />
			</Sequence>
			<Sequence from={420} durationInFrames={150}>
				<Scene3 text1="Noah" text2="lorem etc" text3="LMAOOOOO" />
			</Sequence>
		</>
	);
};
