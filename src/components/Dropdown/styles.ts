import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  line-height: 50px;

  border: 1px solid var(--border);
  cursor: pointer;
  user-select: none;

  z-index: 20;

  /* item */
  > div {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background: var(--box);
    transition: all 0.3s;

    color: var(--text-secondary);

    + div {
      border-top: 1px solid var(--border);

      &:hover {
        background: var(--box-secondary);
      }
    }

    /* select item text */
    > div > span {
      margin-left: 5px;
      color: var(--text-primary);
    }

    /* dropdown icon */
    svg {
      margin-left: 15px;
    }
  }
`;
