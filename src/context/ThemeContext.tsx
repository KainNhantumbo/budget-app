import {
	useState,
	useContext,
	useEffect,
	createContext,
	ReactNode,
} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyleSheeet from '../styles/globalstyles';
import { lightColors, darkColors } from '../themes/colors';

type Props = { children: ReactNode };
type ContextProps = { themeSwitcher: () => void };

const context = createContext<ContextProps>({ themeSwitcher: () => {} });

export default function ThemeContext({ children }: Props) {
	const [currentTheme, setCurrentTheme] = useState(lightColors);
	const THEME_STORAGE_KEY = 'ThemeColor';

	// swithches the current theme
	const themeSwitcher = (): void => {
		const { theme } = JSON.parse(
			localStorage.getItem(THEME_STORAGE_KEY) || `{"theme":"light"}`
		);
		if (theme === 'light') {
			localStorage.setItem(
				THEME_STORAGE_KEY,
				JSON.stringify({ theme: 'dark' })
			);
			return setCurrentTheme(darkColors);
		}
		localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({ theme: 'light' }));
		setCurrentTheme(lightColors);
	};

	useEffect(() => {
		const { theme } = JSON.parse(
			localStorage.getItem(THEME_STORAGE_KEY) || `{"theme":"light"}`
		);
		if (theme === 'light') return setCurrentTheme(lightColors);
		setCurrentTheme(darkColors);
	}, []);

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyleSheeet />
			<context.Provider value={{ themeSwitcher }}>{children}</context.Provider>
		</ThemeProvider>
	);
}

export const useThemeContext = (): ContextProps => {
	const data = useContext(context);
	return data;
};
