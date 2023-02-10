import React, { createContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from '@styles/themes/light';
import dark from '@styles/themes/dark';
import usePersistedState from '@utils/usePersistedState';

interface IProps {
    children : React.ReactNode
}

const ThemeContextProvider: React.FC<IProps> = ({children}) => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme' ,light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return(    
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};

export default ThemeContextProvider;