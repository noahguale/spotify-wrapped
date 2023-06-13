import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gradient-to-b from-red-500 to-blue-500">
			<div className="m-10" />
			<Logo />
			<div className="m-3" />
			<Title />
			<Subtitle />
		</AbsoluteFill>
	);
};
