import styled from 'styled-components';
import { ICardProps } from '.';

export const Container = styled.div<ICardProps>`
  max-width: ${props => props.wd ?? '20rem'};
  max-height: ${props => props.hg ?? '20rem'};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexD ?? 'row'};
  justify-content: space-around;
  align-items: center;
  background-image: url(${props => props.bgdImage});
  background-color: url(${props => props.bgdColor ?? '#D9D9D9'});
  ;
`;
