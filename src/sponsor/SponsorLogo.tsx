import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SponsorLogo: React.FC<{
	sponsorLogo?: string;
	style?: React.CSSProperties;
}> = ({sponsorLogo, style}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scaleUpLogo = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});

	const opacityUp = spring({frame, from: 0, to: 1, fps, durationInFrames: 50});

	return (
		<Img
			style={{
				position: 'absolute',
				top: 500,
				maxHeight: '250px',
				maxWidth: '60%',
				opacity: opacityUp,
				filter: 'drop-shadow(0px 0px 15px #000000)',
				transform: `scale(${Math.abs(scaleUpLogo)})`,
				...style,
			}}
			src={sponsorLogo}
		/>
	);
};
