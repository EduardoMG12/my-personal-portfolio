import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  & div:nth-child(2){
      align-self: flex-end;
  }
  & div{
      display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 46rem;
        color: ${props => props.theme.colors.projectsText};
        background-color: ${props => props.theme.colors.projectsCard};
        & img{
            width: 46.6rem;
            height: auto;
           object-fit: cover;
        }
        & h2{
            color: ${props => props.theme.colors.secundary};
            
        }
        & ul{
            overflow-y: hidden;
            & li{
                width: fit-content;
                & i{
                    font-size: 2.4rem;
                }
            }
            padding-block: 2rem;
        }
    }
    @media (max-width:1024px) {
      gap: 5rem;
    }
    @media (max-width:768px) {
      min-height: 180vh;
      gap: 5rem;
      flex-direction: column;
    }
    @media (max-width:425px) {
          width: 90vw;
      & div{
          width: 90vw !important;
          border-radius: 2rem;
          & div{
              width: 90vw;
              margin: 0 auto;
              border-radius: 2rem;
          }
      }
    }
    @media (max-width:768px) {
      & div:nth-child(2){
          align-self: center;
      }
    }
`;
