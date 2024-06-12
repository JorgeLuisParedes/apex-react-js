import BackgroundSlider from 'react-background-slider/dist';

import image1 from '/images/backgrounds/bg-1.jpg';
import image2 from '/images/backgrounds/bg-2.jpg';
import image3 from '/images/backgrounds/bg-3.jpg';
import image4 from '/images/backgrounds/bg-4.jpg';
import image5 from '/images/backgrounds/bg-5.jpg';

export const CitiesBackground = () => {
	return (
		<BackgroundSlider
			images={[image1, image2, image3, image4, image5]}
			duration={5}
			transition={1}
		/>
	);
};
