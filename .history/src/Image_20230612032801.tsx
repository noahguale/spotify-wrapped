import {Img} from 'remotion';

export const Image = ({src, style}) => {
	return (
		<Img
			src={src}
			style={style}
			className="w-[400px] h-[400px] shadow-black/70 absolute"
		/>
	);
};
