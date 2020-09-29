import styled from 'styled-components';

const AutoCompleteItem = styled.div`
  height: 50px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  color: var(--textSecondary);

  @media (min-width: 601px) {
    &.active {
      background: var(--secondary);
      color: var(--textPrimaryInSecondary);

      &::after {
        content: 'Enter';
        width: 43px;
        height: 22px;
        color: var(--textSecondary);
        font-family: 'Russo One', sans-serif;
        font-size: 10px;
        background: var(--boxInSecondary);
        line-height: 22px;
        text-align: center;
        border-radius: 8px;
      }
    }
  }
`;

export default AutoCompleteItem;
