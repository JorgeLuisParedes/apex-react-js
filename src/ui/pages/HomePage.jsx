import { CitiesBackground, MenuBar } from '../components';

export const HomePage = () => {
	return (
		<>
			<CitiesBackground />
			<MenuBar />
			<div className='p-4 sm:ml-64'>HomePage</div>
		</>
	);
};
