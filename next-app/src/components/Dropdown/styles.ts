import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  line-height: 50px;

  cursor: pointer;
  user-select: none;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  z-index: 20;

  overflow: hidden;

  a {
    text-decoration: none;
  }

  /* item */
  .item {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background: ${props => props.theme.colors.box};
    transition: all 0.3s;

    color: ${props => props.theme.colors.textSecondary};

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

  .dropdown {
    .item {
      border-top: 1px solid ${props => props.theme.colors.border};

      &:hover {
        background: ${props => props.theme.colors.boxSecondary};
      }
    }
  }
`;
