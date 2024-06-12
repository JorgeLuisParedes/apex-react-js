import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { ApexApp } from './ui/ApexApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApexApp />
		</BrowserRouter>
	</React.StrictMode>
);
