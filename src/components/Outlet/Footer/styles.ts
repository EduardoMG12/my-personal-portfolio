import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: hidden;
  width: 100%;
  max-width: 100vw;
  height: 4vh;
  background-color:${props => props.theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  border-top: 0.1rem solid ${props => props.theme.colors.borderHeader};
  & h2{
    height: 100%;
  }
  & h2, a{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 2rem;
    color: ${props => props.theme.colors.headerText};
  }
  & a{
    border-bottom: 0.1rem solid ${props => props.theme.colors.headerText};
    margin-inline: 0.5rem;
  }
`;
