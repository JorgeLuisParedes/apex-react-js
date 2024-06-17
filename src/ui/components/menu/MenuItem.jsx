import { useLocation } from 'react-router-dom';

const menuItem = [
	{
		title: 'Inicio',
		url: '/',
	},
	{
		title: 'Nosotros',
		url: '/about',
	},
	{
		title: 'Propiedades',
		url: '/properties',
	},
	{
		title: 'Contacto',
		url: '/contact',
	},
];

export const MenuItem = () => {
	const location = useLocation();

	const getMenuItemClass = ({ url }) => {
		return location.pathname === url
			? 'flex items-center p-2 pt-3 text-white bg-apOrange group'
			: 'flex items-center p-2 pt-3 text-apOrange hover:bg-apOrange hover:text-white group';
	};
	return (
		<>
			{menuItem.map(({ title, url }) => (
				<li key={url}>
					<a href={url} className={getMenuItemClass({ url })}>
						<span className='ms-3'>{title}</span>
					</a>
				</li>
			))}
		</>
	);
};
