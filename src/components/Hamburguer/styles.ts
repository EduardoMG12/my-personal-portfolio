import styled from 'styled-components';
import { IPropsHamburguer } from '.';

export const Container = styled.div<IPropsHamburguer>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 2rem;
  right: 1rem;
  z-index: 2;
  display: none;
  visibility: hidden;
  cursor: none;
  @media (max-width: 425px) {
    cursor: pointer;
    visibility: visible;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => props.open ? '#ccc' : '#333'};
    border-radius: 1rem;
    transform-origin: 0.1rem;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${props => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
