import { ToggleThemeContext } from '@hooks/ThemeProvider';
import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { Button } from './styles';

const ButtonTheme: React.FC = () => {
	const { toggleTheme } = useContext(ToggleThemeContext);
	const theme = useTheme();
	const isLight = theme.title === 'light' ? true : false; 
	return (
		<Button type="checkbox" checked={isLight} onChange={toggleTheme}/>
	);
};

export default ButtonTheme;