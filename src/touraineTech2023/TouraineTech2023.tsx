import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {LeftTriangle} from './LeftTriangle';
import {RightTriangle} from './RightTriangle';
import {Title} from './Title';
import {Details} from './Details';
import {Speakers} from './Speakers';

export interface Speaker {
	picture: string;
	name: string;
}

export interface TouraineTechProps {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}

export const TouraineTech2023: React.FC<TouraineTechProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Logo />
			<RightTriangle />
			<LeftTriangle />
			<Speakers speakers={speakers} />
			<Title title={title} />
			<Details date={date} time={time} location={location} />
		</AbsoluteFill>
	);
};
