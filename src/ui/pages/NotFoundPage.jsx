import { CitiesBackground, MenuBar } from '../components';
import { useDocumentTitle } from '../hooks';

export const NotFoundPage = () => {
	useDocumentTitle('Página no encontrada');
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 sm:ml-64'>NotFoundPage</div>
		</>
	);
};
