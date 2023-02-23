import React from 'react';
import { Li } from './styles';

interface IPropsIcon {
    link?: string
    className: string
    color?: string
}

export const Icon: React.FC<IPropsIcon> = ({link, className, color}) => {
	return(
		<Li>
			<a href={link} target="_blank" rel="noreferrer">
				<i className={className} color={color}/>
			</a>
		</Li>
	);
};