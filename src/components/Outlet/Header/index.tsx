import ButtonTheme from '@components/buttonTheme';
import Hamburguer from '@components/Hamburguer';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
	return(
		<>
			<Container>
				<ButtonTheme />
				<h1>Charles Eduardo</h1>
				<nav>
					<ul>
						<li>sobre mim</li>
						<li>projetos</li>
						<li><i className='fa-sharp fa-solid fa-user-tie'></i></li>
					</ul>  
				</nav>
			</Container>
			<Hamburguer/>
		</>
	);
};

export default Header;