import React from 'react';
import { Container, Wrapper } from './styles';

export interface IPropsCard {
    children: React.ReactNode
    wd?: string
    hg?: string
    flexD?: string
    justifyC?: string
    bgdImage?: string
    bgdColor?: string
    borderR?: string
}

export const Card: React.FC<IPropsCard> = ({children, wd, hg, flexD, justifyC, borderR, bgdImage, bgdColor}) => {
	return(
		<Container wd={wd} hg={hg} borderR={borderR} flexD={flexD} justifyC={justifyC} bgdImage={bgdImage} bgdColor={bgdColor}>
			{children}
		</Container>
	);
};

interface IPropsContent {
    children: React.ReactNode
}

export const Content: React.FC<IPropsContent> = ({children}) => {
	return( 
		<Wrapper>
			{children}
		</Wrapper>
	);
};