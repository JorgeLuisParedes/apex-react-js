import { Mail, MapPin, Phone, Printer } from 'lucide-react';

export const ContactSection = () => {
	return (
		<>
			<ul className='text-black absolute bottom-12 text-xs'>
				<li className='flex gap-2 mb-4 items-center'>
					<MapPin color='#d52c0b' />
					<span>8300 Nw 53rd ST Suite 350 Doral, FL 33166</span>
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
		</>
	);
};
