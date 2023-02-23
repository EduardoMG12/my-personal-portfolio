import React, { useState } from 'react';
import SideBar from './SideBar';
import { Container } from './styles';

export interface IPropsHamburguer {
    open?: boolean
}

const Hamburguer: React.FC<IPropsHamburguer> = () => {
	const [open, setOpen] = useState(false);

	return(
		<>
			<Container open={open} onClick={() => setOpen(!open)}>
				<span></span>
				<span></span>
				<span></span>
			</Container>
			<SideBar open={open}></SideBar>
		</>
	);
};

export default Hamburguer;
