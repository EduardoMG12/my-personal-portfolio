import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    border-bottom: 0.1rem ${props => props.theme.colors.borderHeader} solid;
    height: 7vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.header};
    color: ${props => props.theme.colors.headerText};
    & h1{
        font-size: 1.8rem;
    }
    & nav ul{
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        & li:nth-child(3){
            margin-left: 2rem;
        }
        & li{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            cursor: pointer;
            transition: 0.2s ease-in-out color;
            transition: 0.5s ease-in-out transform;
            &:hover{
                color: ${props => props.theme.colors.headerTextHover};
                transform: scale(1.04);
            }
        }
    }
    @media (max-width:425px) {
        & nav ul{
        display: none;
        visibility: hidden;
        cursor: none;
        flex-direction: column;
        gap: 0rem;
        justify-content: flex-end;
        align-items: center;
        & li:nth-child(3){
            margin-left: 0;
        }
    }
    }
`;
