import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import {Faces} from './Faces';
import {Gradient} from './Composition';
import {GradientCircle} from './GradientCircle';
import {Wrapped} from './Wrapped';

export const Scene1: React.FC<{sources: string[]}> = ({sources}) => {
	const images = sources.map((i) => require('./' + i));
	const {height} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Gradient height={height} />
			{images.map((image, i) => {
				return (
					<Sequence from={30 * i}>
						<Faces image={image} />
					</Sequence>
				);
			})}
			<Sequence from={120}>
				<GradientCircle />
			</Sequence>
			<Sequence from={160}>
				<Wrapped />
			</Sequence>
		</AbsoluteFill>
	);
};
