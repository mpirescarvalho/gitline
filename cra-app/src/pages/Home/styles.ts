import styled from 'styled-components';

import background from '../../assets/images/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background: url(${background});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Russo One', sans-serif;
    font-size: 96px;
    margin-bottom: 3px;
    transition: color 0.4s;
    color: #fff;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    margin-bottom: 20px;
  }
`;
