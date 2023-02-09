import ButtonTheme from '@components/buttonTheme';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
	return(
		<Container>
			<ButtonTheme onChange={() => console.log('')}/>
		</Container>
	);
};

export default Header;