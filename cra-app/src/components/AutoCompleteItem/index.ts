import styled from 'styled-components';

const AutoCompleteItem = styled.div`
  height: 50px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};

  @media (min-width: 601px) {
    &.active {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.textPrimaryInSecondary};

      &::after {
        content: 'Enter';
        width: 43px;
        height: 22px;
        color: ${props => props.theme.colors.textSecondary};
        font-family: 'Russo One', sans-serif;
        font-size: 10px;
        background: ${props => props.theme.colors.boxInSecondary};
        line-height: 22px;
        text-align: center;
        border-radius: 8px;
      }
    }
  }
`;

export default AutoCompleteItem;
