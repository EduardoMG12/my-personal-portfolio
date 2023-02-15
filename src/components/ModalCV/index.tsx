import React, { useState } from 'react';

import { Container, ContainerModal } from './styles';

const ModalCV: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const switchVisible = () => setIsVisible(!isVisible);

	return(
		<Container>
			<i className='fa-sharp fa-solid fa-user-tie' onClick={switchVisible}/>
			<Modal isVisible={isVisible}>
				<a href=""><p>Dowload CV</p></a>
				<a href=""><p>Ver CV</p></a>
			</Modal>
		</Container>
	);
};

export interface IPropsModal {
    isVisible:boolean
    children: React.ReactNode

}

const Modal: React.FC<IPropsModal> = ({isVisible, children}) => {
	return(
		<ContainerModal isVisible={isVisible}>
			{children}
		</ContainerModal>
	);
};

export default ModalCV;