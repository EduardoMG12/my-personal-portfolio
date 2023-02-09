import light from '@styles/theme/light';
import dark from '@styles/theme/dark';
import IThemes from '@styles/theme/IThemes';
import React, {useState, createContext, useContext} from 'react';
  
  interface ThemeProvider {
    children: React.ReactNode
  }

  interface ThemeContext {
    theme: IThemes;
    setTheme: (newTheme: IThemes) => IThemes
  }
  
const ThemeContext = createContext<ThemeContext>({
	theme: light,
	setTheme: (theme) => theme.title === 'light' ? dark : light,
});
  
export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
	const [theme, setTheme] = useState<IThemes>(light);
  
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
  
export const useThemeContext = () => useContext(ThemeContext);