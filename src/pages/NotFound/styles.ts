import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Russo One', sans-serif;

  h1 {
    color: var(--text-primary-in-background);
    font-size: 90px;
  }

  h2 {
    color: var(--text-secondary-in-background);
    font-size: 46px;
    text-align: center;
  }
`;
