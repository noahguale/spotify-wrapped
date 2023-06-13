import {CSSProperties} from 'react';
import {Img} from 'remotion';

interface ImageProps {
	src: string;
	style?: CSSProperties;
}

export const Image = ({src, style}: ImageProps) => {
	return (
		<Img
			src={src}
			style={style}
			className="w-[400px] h-[400px] shadow-black/70 absolute"
		/>
	);
};
