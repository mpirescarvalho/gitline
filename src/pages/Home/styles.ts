import styled from 'styled-components';

import background from '../../assets/images/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background: url(${background});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Russo One', sans-serif;
    font-size: 96px;
    margin-bottom: 3px;
    color: var(--text-primary-in-background);
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    margin-bottom: 20px;
  }
`;

export const AutoCompleteItem = styled.div`
  height: 50px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  color: var(--text-secondary);

  @media (min-width: 601px) {
    &.active {
      background: var(--secondary);
      color: var(--text-in-secondary);

      &::after {
        content: 'Enter';
        width: 43px;
        height: 22px;
        color: var(--text-secondary);
        font-family: 'Russo One', sans-serif;
        font-size: 10px;
        background: var(--box-in-secondary);
        line-height: 22px;
        text-align: center;
        border-radius: 8px;
      }
    }
  }
`;
