import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const RightTriangle = () => {
	const {height, width, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const top = interpolate(frame, [0, durationInFrames], [100, 200], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top,
				height: 3 * height,
				width: 2 * width,
				backgroundColor: '#222333',
				transform: `translateX(${height / 2}px) rotate(150deg)`,
			}}
		/>
	);
};
