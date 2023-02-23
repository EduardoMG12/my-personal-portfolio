import React from 'react';
import CardHome from './components/CardHome';
import MainProjects from './components/MainProjects';
import { Container } from './styles';

const Home: React.FC = () => {
	return(
		<Container>
			<CardHome/>
			<MainProjects/>
		</Container>
	);
};

export default Home;