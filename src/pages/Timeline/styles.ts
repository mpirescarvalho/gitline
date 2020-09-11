import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  header {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  /* header {
    position: relative;
    width: 100%;
    margin-bottom: 80px;
    border: 1px solid red;
    height: 50px;

    > div {
      position: absolute;
      width: 300px;
      top: 20px;
      right: 20px;
      z-index: 20;

      @media (max-width: 550px) {
        right: 20px !important;
        left: 20px !important;
        width: unset;
      }
    }

    @media (max-width: 550px) {
      margin-bottom: 100px;
    }
  } */
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

  background: var(--background);
  background: linear-gradient(
    180deg,
    var(--box-secondary) 0,
    var(--box-secondary) calc(100% - 120px),
    var(--background) calc(100% - 10px)
  );

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
    color: var(--text-primary-in-background);
    font-weight: bold;

    text-align: center;
  }

  footer {
    margin-bottom: 20px;
  }
`;
