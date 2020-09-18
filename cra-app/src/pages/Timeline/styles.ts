import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  background: ${props => props.theme.colors.background};
  transition: background-color 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  header {
    width: 100%;
    height: 90px;
    padding: 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;

    overflow-y: visible;

    > div {
      /* search box */
      &:first-child {
        height: 50px;
        z-index: 25;

        > div {
          width: 300px;

          @media (max-width: 700px) {
            width: unset;
            max-width: unset;
          }
        }
      }

      /* filter */
      &:last-child {
        height: 50px;
        z-index: 20;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      gap: 15px;
      height: 160px;
    }
  }
`;

export const ContainerRepos = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  position: relative;

  padding: 40px 0;

  footer {
    width: 100%;
    margin: 60px 0 -10px 0;
    display: flex;
    justify-content: center;
  }
`;

export const Line = styled.div`
  position: absolute;
  left: 50%;
  top: -140px;
  display: block;
  width: 8px;
  height: 100%;
  margin-left: -3px;

  background: ${props => props.theme.colors.background};
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.boxSecondary} 0,
    ${props => props.theme.colors.boxSecondary} calc(100% - 120px),
    ${props => props.theme.colors.background} calc(100% - 10px)
  );

  transition: background 0.2s;

  @media (max-width: 700px) {
    left: 10%;
  }
`;

export const ContainerNoRepo = styled.div`
  width: 100vw;
  flex: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    flex: 1;
    display: flex;
    align-items: center;

    font-size: 18px;
    color: ${props => props.theme.colors.textPrimaryInBackground};
    font-weight: bold;

    transition: color 0.2s;

    text-align: center;
  }

  footer {
    margin-bottom: 20px;
  }
`;
