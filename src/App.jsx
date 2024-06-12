import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='bg-blue-500 text-white p-4'>
			<h1 className='text-4xl font-bold'>
				¡Bienvenido(a) a mi aplicación con Tailwind!
			</h1>
			<p className='text-lg'>
				Explora todas las posibilidades que ofrece Tailwind para tu
				proyecto de React.
			</p>
		</div>
	);
}

export default App;
