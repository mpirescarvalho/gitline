import styled from 'styled-components';

export const Scroll = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  footer {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 90px 0;
  position: relative;

  /* Line */
  &::before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
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
  }
`;

export const ContainerNoRepo = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    flex: 1;
    display: flex;
    align-items: center;

    font-size: 18px;
    color: var(--text-primary-in-background);
    font-weight: bold;
  }

  footer {
    margin-bottom: 20px;
  }
`;
