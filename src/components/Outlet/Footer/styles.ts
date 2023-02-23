import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: hidden;
    width: 100vw;
    height: 4vh;
    background-color:${props => props.theme.colors.header};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 0.1rem solid ${props => props.theme.colors.borderHeader};
    font-family: 'Inter', sans-serif;
    & h2, a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4vh;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.headerText};
    }
    & a{
        border-bottom: 0.1rem solid ${props => props.theme.colors.headerText};
        margin-inline: 0.5rem;
    }
    @media (max-width:620px) {
        & h2, & a {
            font-size: 1.4rem;
        }
    }
    @media (max-width:550px) {
        & h2, & a {
            font-size: 1.2rem;
        }
    }
    @media (max-width:470px) {
        & h2, & a {
            font-size: 1rem;
        }
    }
    @media (max-width:400px) {
        & h2, & a {
            font-size: 0.8rem;
        }
    }
`;
