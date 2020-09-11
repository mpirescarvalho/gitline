import styled from 'styled-components';

export const Container = styled.div`
  width: 525px;
  min-height: 135px;
  margin-top: 65px;
  z-index: 15;

  transition: background-color 0.4s;
  background: ${props => props.theme.colors.box};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 62px;
  padding-bottom: 18px;
  position: relative;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    width: 90%;
  }

  img {
    width: 100px;
    height: 100px;
    transition: border-color 0.4s;
    border: 4px solid ${props => props.theme.colors.box};
    background: ${props => props.theme.colors.box};
    border-radius: 50px;
    margin-top: -50px;
    position: absolute;
    top: 0;
  }

  h1,
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: ${props => props.theme.colors.textPrimary};
    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    color: ${props => props.theme.colors.textSecondary};
    transition: color 0.3s;
  }

  p {
    width: 310px;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    transition: color 0.3s;
    color: ${props => props.theme.colors.textPrimary};
    margin-top: 8px;

    @media (max-width: 700px) {
      width: 80%;
    }
  }
`;
