import {Speaker} from '../components/Speaker';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CSSProperties} from 'react';

export const TalkSpeakerPicture: React.FC<{
	style?: CSSProperties;
	speakerPicture?: string;
}> = ({style, speakerPicture}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	if (!speakerPicture) {
		return null;
	}

	const pictureDrop = spring({
		frame,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
	});

	return (
		<Speaker
			style={{
				position: 'absolute',
				top: pictureDrop,
				left: '50%',
				transform: 'translate(-50%, 0)',
				...style,
			}}
			src={speakerPicture}
		/>
	);
};
