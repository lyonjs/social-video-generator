import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const LeftTriangle = () => {
	const {height, width, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const rotate = interpolate(frame, [0, durationInFrames], [-150, -165], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: 150,
				height: 3 * height,
				width: 2 * width,
				backgroundColor: '#6abfad',
				transform: `translateX(-${2 * height}px) rotate(${rotate}deg)`,
			}}
		/>
	);
};
