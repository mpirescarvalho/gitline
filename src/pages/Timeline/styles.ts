import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerRepos = styled.div`
  flex: 1;

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
    var(--background) 1%,
    var(--box-secondary) 5%,
    var(--box-secondary) 95%,
    var(--background) 99%
  );

  @media (max-width: 600px) {
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
