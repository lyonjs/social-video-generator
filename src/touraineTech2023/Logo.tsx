import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
export const Logo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -200,
		to: 20,
		durationInFrames: 30,
	});

	return (
		<Img
			src={staticFile('/images/conferences/touraineTech.svg')}
			width={200}
			height="auto"
			style={{
				position: 'absolute',
				top: pictureDrop,
				right: 20,
			}}
		/>
	);
};
