import { useEffect } from 'react';

export const useDocumentTitle = title => {
	useEffect(() => {
		const baseTitle = 'APEX Investments LLC';
		document.title = title ? `${baseTitle} - ${title}` : baseTitle;
	}, [title]);
};
