import { IPropsSideBar } from './index';
import styled from 'styled-components';

export const SideBarMenu = styled.ul<IPropsSideBar>`
  list-style: none;
  display: flex;
  z-index: 1;
  overflow-y: hidden;
  @media (max-width: 425px) {
    border-radius: 2rem;
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
    & a, li{
        color: ${props => props.theme.colors.headerText};

    }
    & li:last-child{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        text-align: center;
        font-size: 2rem;
        display: none;
        text-decoration: none;
        list-style: none;
        white-space: nowrap;
        @media (max-width: 425px) {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 6rem;
            left: 0;
            right: 0;
        }
        &:hover {
            color: ${props => props.theme.colors.headerTextHover};
            cursor: pointer;
            transition: 0.1s ease-in-out;
        }
    }
`;

export const LinkContent = styled.p`
    font-family: 'Inter', sans-serif;
    display: block;
    font-weight: 600;
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
