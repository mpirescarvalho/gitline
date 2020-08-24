import styled from 'styled-components';

export const Container = styled.form`
  width: 90%;
  max-width: 550px;
  height: 50px;

  background: var(--box);

  border-radius: 4px;
  border: 1px solid var(--border);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  input {
    flex: 1;
    height: 100%;
    border: 0;

    padding: 0 16px;
    color: var(--text-primary);
  }

  button {
    width: 42px;
    height: 42px;
    background: var(--primary);
    border: 0;
    border-radius: 4px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: var(--primary-darker);
    }
  }
`;
