import { CitiesBackground, Footer, MenuBar } from '../components';
import { useDocumentTitle } from '../hooks';

export const NotFoundPage = () => {
	useDocumentTitle('Página no encontrada');
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 lg:ml-64'>NotFoundPage</div>
			<Footer />
		</>
	);
};
