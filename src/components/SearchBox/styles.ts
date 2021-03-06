import styled from 'styled-components';
import { THEME } from '../../styles/theme/colors'

export const Wrapper = styled.div`
  width: 90%;
  max-width: 550px;

  transition: background-color 0.4s;
  background: ${THEME.box};

  border-radius: 4px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  z-index: 20;

  overflow: hidden;
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
    color: ${THEME.textPrimary};
    background: ${THEME.box};

    transition: all 0.4s;
  }

  button {
    width: 42px;
    height: 42px;
    background: ${THEME.primary};
    border: 0;
    border-radius: 4px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: ${THEME.primaryDark};
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-top: 1px solid ${THEME.border};
  padding-top: 6px;
`;

export const ItemContainer = styled.li`
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;
