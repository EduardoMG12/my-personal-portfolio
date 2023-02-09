import React from 'react';
import { Button } from './styles';

interface IPropsButtonTheme{
    onChange: () => void

}

const ButtonTheme: React.FC<IPropsButtonTheme> = ({onChange}) => {
	return (
		<>
			<Button type="checkbox"  onChange={onChange}/>
		</>
  
	);
};

export default ButtonTheme;