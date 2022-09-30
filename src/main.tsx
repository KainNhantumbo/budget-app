import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContext from './context/ThemeContext';
import App from './App';
import AppContext from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContext>
			<AppContext>
				<App />
			</AppContext>
		</ThemeContext>
	</React.StrictMode>
);
