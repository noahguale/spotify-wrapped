import {Img} from 'remotion';

export const Image = ({src}) => {
	return (
		<Img src={src} className="w-[400px] h-[400px] shadow-slate-100 absolute" />
	);
};
