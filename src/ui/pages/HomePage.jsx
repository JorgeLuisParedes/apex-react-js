import { CitiesBackground, MenuBar } from '../components';
import { useDocumentTitle } from '../hooks';

export const HomePage = () => {
	useDocumentTitle();
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 sm:ml-64'>HomePage</div>
		</>
	);
};
