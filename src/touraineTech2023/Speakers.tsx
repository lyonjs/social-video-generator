import {AbsoluteFill, Sequence} from 'remotion';
import {TalkSpeakerPicture} from '../talk/TalkSpeakerPicture';
import {Speaker} from './TouraineTech2023';
import {Title} from './Title';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	return (
		<Sequence from={20} name="Picture">
			<AbsoluteFill
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: 100,
				}}
			>
				{speakers.map((speaker, index) => {
					const shadowColor = index % 2 === 0 ? '#6abfad' : '#222333';

					return (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<TalkSpeakerPicture
								key={speaker.name}
								style={{
									display: 'block',
									position: 'relative',
									left: 'unset',
									transform: 'translate(0)',
									width: 250,
									height: 250,
									border: 'none',
									boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
								}}
								speakerPicture={speaker.picture}
							/>
							<Title
								title={speaker.name}
								style={{
									position: 'relative',
									left: 'unset',
									bottom: '-20%',
									transform: 'translate(0)',
									width: 250,
									height: 100,
									fontSize: '30px',
									fontWeight: 700,
									color: '#222333',
									textShadow: `1px 1px 1px white`,
								}}
								delay={40}
							/>
						</div>
					);
				})}
			</AbsoluteFill>
		</Sequence>
	);
};
