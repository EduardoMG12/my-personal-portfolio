import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *{
    /* border: 2px solid green; */
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
  }

  html{
    font-size: 62.5%
  }

  body{
    background-color: ${props => props.theme.colors.header};
  }
  
`;

export default GlobalStyle;