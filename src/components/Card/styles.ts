import { IPropsCard } from '.';
import styled from 'styled-components';

//Card
export const Container = styled.div<IPropsCard>`
    max-width: ${props => props.wd ?? '20rem'};
    max-height: ${props => props.hg ?? '20rem'};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.flexD ?? 'row'};
    justify-content: ${props => props.justifyC ?? 'space-around'};
    align-items: center;
    background-image: url(${props => props.bgdImage});
    background-color: url(${props => props.bgdColor ?? '#D9D9D9'});
    border-radius: ${props => props.borderR ?? '0'};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

//Content
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 95%;
    width: 60%;
    & ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 1.5rem;
    }
`;