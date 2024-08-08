import { CitiesBackground, Footer, MenuBar } from '../components';
import { useDocumentTitle } from '../hooks';

export const AboutPage = () => {
	useDocumentTitle('Nosotros');
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 lg:ml-64'>AboutPage</div>
			<Footer />
		</>
	);
};
