import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.header};
`;
