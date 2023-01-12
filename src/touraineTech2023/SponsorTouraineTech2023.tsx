import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {LeftTriangle} from './LeftTriangle';
import {RightTriangle} from './RightTriangle';
import {Title} from './Title';
import {SponsorLogo} from '../sponsor/SponsorLogo';

export interface SponsorProps {
	message: string;
	sponsorLogo: string;
}

export const SponsorTouraineTech2023: React.FC<SponsorProps> = ({
	message,
	sponsorLogo,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Logo />
			<RightTriangle />
			<LeftTriangle />
			<Title title={message} />
			<SponsorLogo
				sponsorLogo={sponsorLogo}
				style={{
					top: 250,
					margin: '0 auto',
					filter: 'none',
					left: 0,
					right: 0,
				}}
			/>
		</AbsoluteFill>
	);
};
