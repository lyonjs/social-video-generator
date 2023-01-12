import {Lottie} from '@remotion/lottie';
import {useLottie} from '../components/hooks/useLottie';
import {Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustrationDate = useLottie('lf20_ak90tqhe');
	const illustrationHour = useLottie('lf20_nv5aXa');
	const illustrationLocation = useLottie('lf20_PgZU3O');

	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	if (!illustrationHour || !illustrationDate || !illustrationLocation) {
		return null;
	}

	return (
		<Sequence from={40} name="Details">
			<div
				style={{
					fontFamily: 'Noto Sans,sans-serif',
					fontWeight: 700,
					fontSize: '32px',
					color: 'white',
					position: 'absolute',
					bottom: 0,
					display: 'flex',
					width: '100%',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Lottie
						style={{
							width: '130px',
							filter: 'none',
						}}
						playbackRate={1.5}
						animationData={illustrationDate}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{date}
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '2rem',
					}}
				>
					<Lottie
						style={{
							width: '70px',
							filter: 'none',
						}}
						animationData={illustrationHour}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{time}
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Lottie
						style={{
							width: '80px',
							filter: 'none',
						}}
						animationData={illustrationLocation}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{location}
					</span>
				</div>
			</div>
		</Sequence>
	);
};
