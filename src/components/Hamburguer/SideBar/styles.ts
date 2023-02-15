import { IPropsSideBar } from './index';
import styled from 'styled-components';

export const SideBarMenu = styled.ul<IPropsSideBar>`
  list-style: none;
  display: flex;
  z-index: 1;
  overflow-y: hidden;
  @media (max-width: 425px) {
    background-color: ${props => props.theme.colors.header};    
    flex-flow: column nowrap;
    position: fixed;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
    margin: 0;
    padding: 0;
    top: 0rem;
    right: 0;
    height: 40vh;
    width: 50vw;
    padding-top: 6rem;
    transition: transform 0.3s ease-in-out;
  }
  & a:last-child{
    position: absolute;
    bottom: 6rem;
    left: 0;
    right: 0;
  }
`;

export const LinkContent = styled.p`
    color: ${props => props.theme.colors.headerText};
    display: block;
    font-weight: 900;
    text-align: center;
    height: 100%;
    font-size: 2rem;
    display: none;
    text-decoration: none;
    list-style: none;
    white-space: nowrap;
    @media (max-width: 425px) {
        display: block;
    }
    &:hover {
        color: ${props => props.theme.colors.headerTextHover};
        cursor: pointer;
        transition: 0.1s ease-in-out;
    }
`;
