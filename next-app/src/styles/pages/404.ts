import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
  transition: background-color 0.4s;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 20px;

    > div {
      width: 300px;

      @media (max-width: 550px) {
        width: 100%;
      }
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Russo One', sans-serif;

    h1 {
      color: ${props => props.theme.colors.textPrimaryInBackground};
      transition: color 0.2s;
      font-size: 90px;
      text-align: center;
    }

    h2 {
      color: ${props => props.theme.colors.textSecondaryInBackground};
      transition: color 0.2s;
      font-size: 46px;
      text-align: center;
    }
  }
`;
