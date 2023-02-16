import { IPropsModal } from './index';
import styled from 'styled-components';

export const Container = styled.div`
 & i{
    font-size: 2rem;
 }
`;
export const ContainerModal = styled.div<IPropsModal>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    display: ${props => props.isVisible ? 'flex' : 'none'};
    justify-content: center;
    right: 1rem;
    top: 4rem;
    align-items: center;
    list-style: none;
    background-color: ${props => props.theme.colors.header}; 
    position: fixed;
    transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
    border-radius: 2rem;
    padding-inline: 2rem;
    height: 7vh;
    min-width: 10vw;
    font-size: 1.6rem;
    transition: transform 0.3s ease-in-out;
    & a{
        word-break: keep-all;
        white-space: nowrap;
        color: ${props => props.theme.colors.headerText};
        font-family: 'Inter', sans-serif;
        font-size: 1.8rem;
        &:hover{
            color: ${props => props.theme.colors.headerTextHover}
        }
    }
    @media (max-width:425px) {
        justify-content: center;
        height: 12vh;
        width: 50vw;
        right: 0;
        top: auto;
        bottom: auto;
    }       
    `;
