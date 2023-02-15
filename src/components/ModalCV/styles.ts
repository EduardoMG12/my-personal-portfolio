import { IPropsModal } from './index';
import styled from 'styled-components';

export const Container = styled.div`
 & i{
    font-size: 2rem;
 }
`;
export const ContainerModal = styled.div<IPropsModal>`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    justify-content: center;
    gap: 1.5rem;
    right: 1rem;
    top: 4rem;
    flex-direction: row;
    align-items: center;
    list-style: none;
    background-color: ${props => props.theme.colors.header}; 
    position: fixed;
    transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
    height: 7vh;
    min-width: 10vw;
    font-size: 1.6rem;
    transition: transform 0.3s ease-in-out;
    & a{
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        word-break: keep-all;
        white-space: nowrap;
        color: ${props => props.theme.colors.headerText};
        &:hover{
            color: ${props => props.theme.colors.headerTextHover}
        }
    }
    @media (max-width:425px) {
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        z-index: 3;
        height: 12vh;
        width: 50vw;
        right: 0;
        top: auto;
        bottom: auto;
    }       
    `;
