import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  line-height: 50px;

  border: 1px solid ${props => props.theme.colors.border};
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
    background: ${props => props.theme.colors.box};
    transition: all 0.3s;

    color: ${props => props.theme.colors.textSecondary};

    + div {
      border-top: 1px solid ${props => props.theme.colors.border};

      &:hover {
        background: ${props => props.theme.colors.boxSecondary};
      }
    }

    /* select item text */
    > div > span {
      margin-left: 5px;
      color: ${props => props.theme.colors.textPrimary};
    }

    /* dropdown icon */
    svg {
      margin-left: 15px;
    }
  }
`;
