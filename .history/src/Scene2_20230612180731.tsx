import { CSSProperties, FC, ReactNode } from 'react'
import { AbsoluteFill, useVideoConfig } from 'remotion'

interface BarProps {
  color: string;
  children: ReactNode;
  endWidth: number
}

interface TitleProps {
	children: ReactNode;
	style?: CSSProperties;
}

const Title = ({children, style}: TitleProps) => {
	return (
		<div
			className="font-gotham text-white text-4xl font-[550] text-center absolute top-[200px] w-full drop-shadow-lg"
			style={style}
		>
			{children}
		</div>
	);
};

const Bar: FC<BarProps> = ({color, children, endWidth}) => {

  return (
    <div className='h-[150px] rounded-full mt-[10px]' style={{backgroundColor: color, width: endWidt+ 80h}}>
      {children}
    </div>
  )
}
export const Scene2: FC = () => {
  const {width} = useVideoConfig()

  return (
    <AbsoluteFill className="bg-[#d4148e]">
      <Title>Your top genres were</Title>
      <div className='p-[150px]'/>
      <Bar color='#b2fef5' endWidth={width / 2}> Test </Bar>
      <Bar color='#d5f772' endWidth={width / 2 - 40}> Test </Bar>
      <Bar color='#4e00f9' endWidth={width / 2 - 80}> Test </Bar>
      <Bar color='#1e1416' endWidth={width / 2 - 120}> Test </Bar>
      <Bar color='#fefefe' endWidth={width / 2- 160}> Test </Bar>

    </AbsoluteFill>)
}
