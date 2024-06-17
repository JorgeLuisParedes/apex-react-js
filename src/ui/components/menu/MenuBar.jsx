import 'flowbite';
import '@fontsource/roboto';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Printer,
} from 'lucide-react';
import { Logo } from './Logo';
import { MenuSection } from './MenuSection';

export const MenuBar = () => {
	return (
		<>
			<button
				data-drawer-target='default-sidebar'
				data-drawer-toggle='default-sidebar'
				aria-controls='default-sidebar'
				type='button'
				className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-white bg-apOrange rounded-lg sm:hidden hover:bg-white hover:text-apOrange'>
				<span className='sr-only'>Open sidebar</span>
				<svg
					className='w-6 h-6'
					aria-hidden='true'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						clipRule='evenodd'
						fillRule='evenodd'
						d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
				</svg>
			</button>

			<aside
				id='default-sidebar'
				className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
					<a href='/' className='flex items-center ps-2.5 mb-5'>
						<Logo />
					</a>
					<MenuSection />
					<ul className='text-black absolute bottom-12 text-xs'>
						<li className='flex gap-2 mb-4 items-center'>
							<MapPin color='#d52c0b' />
							<span>
								8300 Nw 53rd ST Suite 350 Doral, FL 33166
							</span>
						</li>
						<li className='flex gap-2 mb-4 items-center'>
							<Phone color='#d52c0b' />
							<span>305-742-2170</span>
						</li>
						<li className='flex gap-2 mb-4 items-center'>
							<Printer color='#d52c0b' />
							<span>305-742-2178</span>
						</li>
						<li className='flex gap-2 items-center'>
							<Mail color='#d52c0b' />
							<a
								className='text-apOrange underline'
								href='mailto:info@apexinvestmentsllc.net'>
								info@apexinvestmentsllc.net
							</a>
						</li>
					</ul>
					<ul className='flex gap-2 text-black absolute bottom-2'>
						<li>
							<a href='https://www.facebook.com/apexinvestmentsllc'>
								<Facebook color='#d52c0b' />
							</a>
						</li>
						<li>
							<a href='https://www.facebook.com/apexinvestmentsllc'>
								<Instagram color='#d52c0b' />
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};
