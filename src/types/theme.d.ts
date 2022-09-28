import {} from 'styled-components';
import { ThemeType } from './themeType';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
