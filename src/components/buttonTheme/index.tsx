import { ToggleThemeContext } from '@hooks/ThemeProvider';
import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { Button } from './styles';

const ButtonTheme: React.FC = () => {
	const { toggleTheme } = useContext(ToggleThemeContext);
	const theme = useTheme();
	const isDark = theme.title === 'dark' ? true : false; 
	return (
		<Button type="checkbox" checked={isDark} onChange={toggleTheme}/>

	);
};

export default ButtonTheme;