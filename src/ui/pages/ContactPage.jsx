import { CitiesBackground, Footer, MenuBar } from '../components';
import { useDocumentTitle } from '../hooks';

export const ContactPage = () => {
	useDocumentTitle('Contacto');
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 lg:ml-64'>ContactPage</div>
			<Footer />
		</>
	);
};
