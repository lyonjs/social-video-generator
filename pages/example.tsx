import {Player} from '@remotion/player';

import list from './exampleList.json';
import * as Compositions from '../src/components';

const Example = () => {
	return (
		<>
			{list.map((video) => {
				return (
					<section>
						<Player
							controls
							loop
							style={{
								height: '400px',
								width: '400px',
								boxShadow: '0 0 5px -1px #000000',
							}}
							durationInFrames={270}
							compositionWidth={1200}
							compositionHeight={1200}
							fps={30}
							component={Compositions[video.composition]}
							inputProps={video.composition.params}
						/>
					</section>
				);
			})}
		</>
	);
};

export default Example;
