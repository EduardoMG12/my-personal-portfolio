import React from 'react';
import GlobalStyle from '@styles/globalStyle';
import { Route, Routes } from 'react-router-dom';
import Outlet from '@components/Outlet';
import Home from '@pages/Home';
import ThemeContextProvider from '@hooks/ThemeProvider';

const App: React.FC = () => {
	return (
		<>
			<ThemeContextProvider>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Outlet/>} >
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</ThemeContextProvider>
		</>
	);
};
export default App;
