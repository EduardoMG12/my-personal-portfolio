import ThemeContextProvider, { ToggleThemeContext } from '@hooks/ThemeProvider';
import React, { useContext } from 'react';
import { Button } from './styles';



const ButtonTheme: React.FC = () => {
	const { toggleTheme } = useContext(ToggleThemeContext);
	return (
		<>
			<Button type="checkbox"  onChange={toggleTheme}/>
		</>
  
	);
};

export default ButtonTheme;