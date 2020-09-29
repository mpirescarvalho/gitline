import styled from 'styled-components';

export const Container = styled.footer`
  > span {
    color: var(--textPrimary);

    a {
      text-decoration: none;
      color: var(--secondary);
      transition: color 0.2s;

      &:hover {
        color: var(--secondaryDark);
      }
    }
  }
`;
