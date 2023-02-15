import ButtonTheme from '@components/buttonTheme';
import Hamburguer from '@components/Hamburguer';
import ModalCV from '@components/ModalCV';
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
						<ModalCV/>
					</ul>  
				</nav>
			</Container>
			<Hamburguer/>
		</>
	);
};

export default Header;