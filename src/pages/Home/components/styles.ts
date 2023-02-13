import styled from 'styled-components';

export interface IPropsImage {
    bgdImage: string
}

export const Image = styled.div<IPropsImage>`
    height: 95%;
    width: 31rem;
    background-image: url(${props => props.bgdImage});
    background-size: cover;
    background-position: center;
    border-radius: 2rem ;
        `;

export const Ballon = styled.div`
    padding: 2rem;
    border-radius: 2rem 2rem;
    height: 33.7rem;
    width: 40.6rem;
    background-color: ${props => props.theme.colors.ballonCard};
    & p{
        font-size: 1.6rem;
        color: ${props => props.theme.colors.secundary};
    }
    `;