import {Img} from 'remotion';

export const Image = ({src, opacity}) => {
	return (
		<Img
			src={src}
			style={{opacity}}
			className="w-[400px] h-[400px] shadow-black/70 absolute"
		/>
	);
};
