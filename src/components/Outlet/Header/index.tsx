import ButtonTheme from '@components/buttonTheme';
import React from 'react';
import { Props } from '..';

import { Container } from './styles';

const Header: React.FC<Props> = ({toggleTheme}) => {
	return(
		<Container>
			<ButtonTheme onChange={toggleTheme}/>
		</Container>
	);
};

export default Header;