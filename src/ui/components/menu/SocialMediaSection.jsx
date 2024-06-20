import { Facebook, Instagram } from 'lucide-react';

export const SocialMediaSection = () => {
	return (
		<>
			<ul className='flex gap-2 text-black absolute bottom-2'>
				<li>
					<a
						href='https://www.facebook.com/apexinvestmentsllc'
						target='_blank'>
						<Facebook color='#d52c0b' />
					</a>
				</li>
				<li>
					<a
						href='https://www.instagram.com/apexinvestmentsllc/'
						target='_blank'>
						<Instagram color='#d52c0b' />
					</a>
				</li>
			</ul>
		</>
	);
};
