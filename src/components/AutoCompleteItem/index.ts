import styled from 'styled-components';
import { THEME } from '../../styles/theme/colors'

const AutoCompleteItem = styled.div`
  height: 50px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${THEME.border};
  color: ${THEME.textSecondary};

  @media (min-width: 601px) {
    &.active {
      background: ${THEME.secondary};
      color: ${THEME.textPrimaryInSecondary};

      &::after {
        content: 'Enter';
        width: 43px;
        height: 22px;
        color: ${THEME.textSecondary};
        font-family: 'Russo One', sans-serif;
        font-size: 10px;
        background: ${THEME.boxInSecondary};
        line-height: 22px;
        text-align: center;
        border-radius: 8px;
      }
    }
  }
`;

export default AutoCompleteItem;
