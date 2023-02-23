import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    overflow-y: hidden;
    width: 100vw;
    height: 4vh;
    background-color:${props => props.theme.colors.header};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
    border-top: 0.1rem solid ${props => props.theme.colors.borderHeader};
    font-family: 'Inter', sans-serif;
    & h2{
        height: 100%;
    }
    & h2, a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
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
