import styled from 'styled-components';
import { THEME } from '../../styles/theme/colors'

export const Container = styled.footer`
  > span {
    color: ${THEME.textPrimary};

    a {
      text-decoration: none;
      color: ${THEME.secondary};
      transition: color 0.2s;

      &:hover {
        color: ${THEME.secondaryDark};
      }
    }
  }
`;
