import {CSSProperties, ReactNode} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
// Import styled from 'styled-components';

// const Container = styled.div`
// 	padding: 80px 60px;
// 	display: flex;
// 	flex: 1;
// `;

// const Title = styled.div`
// 	color: #d21c8c;
// 	font-size: 90px;
// 	font-weight: bold;
// 	text-align: center;
// 	line-height: 1;
// 	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
// 		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// `;

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
			<div style={{flex: 1, position: 'relative'}}>
				<AbsoluteFill
					style={{
						transform: `scale(${scale})`,
						opacity: progress,
					}}
					className="bg-[#b2fef5] flex flex-row justify-center items-center drop-shadow-xl"
				>
					<Title
						style={{
							opacity: titleProgress,
						}}
					>
						2020
						{/* eslint-disable react/jsx-child-element-spacing */}
						<br />
						{/* eslint-enable react/jsx-child-element-spacing */}
						Wrapped
					</Title>
				</AbsoluteFill>
			</div>
		</Container>
	);
};
