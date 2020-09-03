import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 550px;

  background: var(--box);

  border-radius: 4px;
  border: 1px solid var(--border);
`;

export const ContainerInput = styled.form`
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  &.complete-items {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

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

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-top: 1px solid var(--border);
  padding-top: 6px;
`;

export const ItemContainer = styled.div`
  cursor: pointer;
`;
