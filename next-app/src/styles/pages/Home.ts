import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  h1 {
    margin-bottom: 20px;
  }

  input {
    outline: 0;
    border: 0;
    padding: 12px 20px;
    max-width: 300px;
    width: 100%;
    background: #333;
    color: #fff;
    ::placeholder {
      color: #999;
    }
  }

  div.result {
  }
`;

export const ResultList = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 380px;
  min-height: 200px;
  max-height: 480px;
  background: #333;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  overflow-y: scroll;
`;

export const ResultItem = styled.a`
  padding: 12px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  color: #fff;

  span {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    margin-top: 5px;
  }

  & + & {
    border-top: 1px solid #444;
  }

  :hover {
    background: #555;
  }
`;

export const Center = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: #999;
  }
`;
