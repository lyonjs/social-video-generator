import {Composition, Folder, staticFile} from 'remotion';
import {Sponsor} from './sponsor/Sponsor';
import {LyonJSLogo} from './components/LyonJSLogo';
import {ImageBackground} from './components/ImageBackground';
import {Title} from './components/Title';
import {Talk} from './talk/Talk';
import {Speaker} from './components/Speaker';

import {Meetup} from './meetup/Meetup';
import {Register} from './meetup/Register';
import {Event} from './event/Event';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Folder name="Components">
				<Composition
					component={Speaker}
					width={1200}
					height={1200}
					id="Speaker"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						src: staticFile('/lyonjs-squared.png'),
					}}
				/>
				<Composition
					component={LyonJSLogo}
					width={1200}
					height={1200}
					id="LyonJSLogo"
					fps={30}
					durationInFrames={120}
				/>
				<Composition
					component={ImageBackground}
					width={1200}
					height={1200}
					id="ImageBackground"
					fps={30}
					durationInFrames={120}
					defaultProps={{animated: true}}
				/>
				<Composition
					component={Title}
					width={1200}
					height={1200}
					id="Title"
					fps={30}
					durationInFrames={120}
					defaultProps={{children: 'Hello'}}
				/>
			</Folder>
			<Folder name="Sponsor">
				<Composition
					component={Sponsor}
					width={1200}
					height={1200}
					id="Sponsor"
					fps={30}
					durationInFrames={200}
					defaultProps={{
						sponsorLocalisation: '94 Rue Robert - Lyon',
					}}
				/>
				<Composition
					component={Sponsor}
					width={1200}
					height={1200}
					id="SponsorWithoutLogo"
					fps={30}
					durationInFrames={200}
					defaultProps={{
						companyName: 'EvilCorp',
					}}
				/>
			</Folder>
			<Folder name="Talk">
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="TalkWithPicture"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						speakersNames: 'John Doe',
						talkTitle: 'Is JS an awesome programing language ?',
						speakerPicture: staticFile('/lyonjs-squared.png'),
					}}
				/>
				<Composition
					component={Talk}
					width={1200}
					height={1200}
					id="Talk"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						speakersNames: 'Foo bar',
						talkTitle: 'Is JS an awesome programing language?',
					}}
				/>
			</Folder>
			<Folder name="Meetup">
				<Composition
					component={Meetup}
					width={1200}
					height={1200}
					id="Meetup"
					fps={30}
					durationInFrames={270}
					defaultProps={{
						title: '#76 - LyonJS de la rentr??e ????',
						date: '28 septembre 2022',
					}}
				/>
				<Composition
					component={Register}
					width={1200}
					height={1200}
					id="Register"
					fps={30}
					durationInFrames={120}
					defaultProps={{}}
				/>
			</Folder>
			<Folder name="Event">
				<Composition
					component={Event}
					width={1200}
					height={1200}
					id="Event"
					fps={30}
					durationInFrames={270}
					defaultProps={{
						backgroundImg:
							'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
						title: 'Ap??ro JS de No??l ????',
						lottieAsset: 'lf20_UDstUT',
					}}
				/>
			</Folder>
		</>
	);
};
