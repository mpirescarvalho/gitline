import styled from 'styled-components';

export const Container = styled.footer`
  > span {
    color: ${props => props.theme.colors.textPrimaryInBackground};

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.secondary};
      transition: color 0.2s;

      &:hover {
        color: ${props => props.theme.colors.secondaryDark};
      }
    }
  }
`;
