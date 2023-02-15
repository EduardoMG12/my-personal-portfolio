import React from 'react';
import { Link } from 'react-router-dom';
import { SideBarMenu, LinkContent } from './styles';

export interface IPropsSideBar {
    open: boolean
}

const SideBar:React.FC<IPropsSideBar> = ({ open }) => {
	return (
		<SideBarMenu open={open}>
			<Link to="/">
				<LinkContent>Sobre mim</LinkContent>
			</Link>
			<Link to="/">
				<LinkContent>projetos</LinkContent>
			</Link>
			<Link to="/">
				<LinkContent><i className='fa-sharp fa-solid fa-user-tie'></i></LinkContent>
			</Link>
		</SideBarMenu>
	);
};

export default SideBar;