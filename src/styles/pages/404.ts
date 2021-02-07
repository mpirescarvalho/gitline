import styled from 'styled-components';
import { THEME } from '../theme/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${THEME.background};
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
    padding: 0 20px;

    h1 {
      color: ${THEME.textPrimary};
      transition: color 0.2s;
      font-size: 90px;
      text-align: center;
    }

    h2 {
      color: ${THEME.textPrimary};
      font-weight: 300;
      transition: color 0.2s;
      font-size: 46px;
      text-align: center;
    }
  }
`;
