import BackgroundSlider from 'react-background-slider/dist';

import image1 from '../images/backgrounds/bg-1.webp';
import image2 from '../images/backgrounds/bg-2.webp';
import image3 from '../images/backgrounds/bg-3.webp';
import image4 from '../images/backgrounds/bg-4.webp';
import image5 from '../images/backgrounds/bg-5.webp';

export const CitiesBackground = () => {
	return (
		<BackgroundSlider
			images={[image1, image2, image3, image4, image5]}
			duration={5}
			transition={1}
		/>
	);
};
