import { CitiesBackground, MenuBar } from '../components';
import { useDocumentTitle } from '../hooks';

export const PropertiesPage = () => {
	useDocumentTitle('Propiedades');
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 sm:ml-64'>PropertiesPage</div>
		</>
	);
};
