import styled from 'styled-components';

export const Li = styled.div`
    background-color: ${props => props.theme.colors.iconsBgdCard};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 9rem;
    height: 9rem;
    font-size: 4rem;
    &:hover{
        background-color: ${props => props.theme.colors.iconsCard};
    }
    &:hover a i{
        color: ${props => props.theme.colors.iconsBgdCard};
    }
    & a{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & a i{
        color: ${props => props.theme.colors.iconsCard};
        
    }
    transition: 0.4s ease-in-out all;
    @media (max-width:768px){
        width: 6rem;
        height: 6rem;
        font-size: 2.5rem;
    }
    `
    ;