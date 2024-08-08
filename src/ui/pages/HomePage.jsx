import { CitiesBackground, MenuBar, Footer } from '../components';
import { useDocumentTitle } from '../hooks';

export const HomePage = () => {
	useDocumentTitle();
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 lg:ml-64'>HomePage</div>
			<Footer />
		</>
	);
};
