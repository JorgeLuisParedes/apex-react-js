import { Link } from 'react-router-dom';
import { Logo360 } from './Logo360';
export const Footer = () => {
	return (
		<>
			<div className='lg:ml-64'>
				<footer className='fixed lg:ml-64 bottom-0 left-0 z-20 sm:flex justify-between w-screen bg-black p-4 grid grid-cols-1 justify-items-center gap-2'>
					<span className='text-sm text-white text-center'>
						© 2024 APEX Investments. Todos los Derechos Reservados.
					</span>
					<Link
						to='https://www.360creativestudio.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='mt-0 lg:mr-64 sm:mr-0 sm:mt-0'>
						<Logo360 />
					</Link>
				</footer>
			</div>
		</>
	);
};
