import {CSSProperties, ReactNode} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

interface ContainerProps {
	children: ReactNode;
}
interface TitleProps {
	children: ReactNode;
	style: CSSProperties;
}

const Title = ({children, style}: TitleProps) => {
	return (
		<div
			style={style}
			className="font-gotham text-[#d21c8c] text-[90px] font-bold"
		>
			{children}
		</div>
	);
};

const Container: React.FC<ContainerProps> = ({children}) => {
	return <div className="pb-[80px] pl-[60px] flex flex-1">{children}</div>;
};

export const Wrapped: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});
	const titleProgress = spring({
		frame: frame - 15,
		fps,
		config: {
			damping: 200,
		},
	});
	const scale = interpolate(progress, [0, 1], [0.7, 1]);
	return (
		<Container>
			<div className="flex flex-1 relative">
				<AbsoluteFill
					style={{
						transform: `scale(${scale})`,
						opacity: progress,
					}}
					className="bg-[#b2fef5] flex flex-row -ml-8 mt-10 justify-center items-center text-center drop-shadow-xl"
				>
					<Title
						style={{
							opacity: titleProgress,
						}}
					>
						Noah's
						<br />
						Wrapped
					</Title>
				</AbsoluteFill>
			</div>
		</Container>
	);
};
