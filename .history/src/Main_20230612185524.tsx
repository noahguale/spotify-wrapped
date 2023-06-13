import {Sequence} from 'remotion';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence durationInFrames={210}>
				<Scene1 sources={artists} />
			</Sequence>
			<Sequence from={210} durationInFrames={210}>
				<Scene2 ranking={ranking} />
			</Sequence>
			<Sequence from={420} durationInFrames={150}>
				<Scene3
					topSongName={topSongName}
					topSongArtistName={topSongArtistName}
					topSongCover={topSongCover}
				/>
			</Sequence>
		</>
	);
};
