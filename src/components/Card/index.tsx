import React from 'react';

import { Container } from './styles';

export interface ICardProps {
    children: React.ReactNode
    wd?: string
    hg?: string
    flexD?: string
    bgdImage?: string
    bgdColor?: string
}

export const Card: React.FC<ICardProps> = ({children, wd, hg, flexD, bgdImage, bgdColor}) => {
	return(
		<Container wd={wd} hg={hg} flexD={flexD} bgdImage={bgdImage} bgdColor={bgdColor}>
			{children}
		</Container>
	);
};
