import { Route, Routes } from 'react-router-dom';
import {
	AboutPage,
	ContactPage,
	HomePage,
	NotFoundPage,
	PropertiesPage,
} from '../pages';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/properties' element={<PropertiesPage />} />
				<Route path='/contact' element={<ContactPage />} />

				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};
