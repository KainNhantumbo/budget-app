import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContext from './context/ThemeContext';
import App from './App';
import './css/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContext>
			<App />
		</ThemeContext>
	</React.StrictMode>
);
