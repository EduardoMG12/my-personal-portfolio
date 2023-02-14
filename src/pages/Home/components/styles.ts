import styled from 'styled-components';

export interface IPropsImage {
    bgdImage: string
}

export const Image = styled.div<IPropsImage>`
    height: 95%;
    width: 100%;
    max-width: 31rem;
    background-image: url(${props => props.bgdImage});
    background-size: cover;
    background-position: center;
    border-radius: 2rem ;
    @media (max-width:768px){
        width: 40%;
    }
    `
    ;

export const Ballon = styled.div`
    padding: 2rem;
    border-radius: 2rem;
    height: 100%;
    max-height: 33.7rem;
    width: 100%;
    max-width: 40.6rem;
    background-color: ${props => props.theme.colors.ballonCard};
    & p{
        font-size: 1.6rem;
        color: ${props => props.theme.colors.secundary};
    }
    @media (max-width:768px){
        padding: 1rem;
        & p{
            font-size: 1.4rem;
        }
    }
    `
    ;