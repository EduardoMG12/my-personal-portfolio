import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export interface Props {
    toggleTheme: () => void

}

const Main: React.FC<Props> = ({toggleTheme}) => {
	return (
		<>
			<Header toggleTheme={toggleTheme}/>
			<Outlet />
			<Footer />
		</>

	);
};

export default Main;