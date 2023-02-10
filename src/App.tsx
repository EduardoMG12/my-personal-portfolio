import React, { useState } from 'react';
import GlobalStyle from '@styles/globalStyle';
import { Route, Routes } from 'react-router-dom';
import Outlet from '@components/Outlet';
import Home from '@pages/Home';
import { ThemeProvider } from 'styled-components';
import light from '@styles/themes/light';
import dark from '@styles/themes/dark';

const App: React.FC = () => {
	const [theme, setTheme] = useState(light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Outlet toggleTheme={toggleTheme}/>} >
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</>
	);
};
export default App;
