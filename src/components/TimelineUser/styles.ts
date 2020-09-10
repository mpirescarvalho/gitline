import styled from 'styled-components';

export const Container = styled.div`
  width: 525px;
  min-height: 135px;
  margin-top: 65px;
  z-index: 15;

  background: var(--box);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 62px;
  padding-bottom: 18px;
  position: relative;

  @media (max-width: 700px) {
    width: 90%;
  }

  img {
    width: 100px;
    height: 100px;
    border: 4px solid var(--box);
    background: var(--box);
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
    color: var(--text-primary);
    transition: color 0.3s;

    &:hover {
      color: var(--secondary);
    }
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    color: var(--text-secondary);
  }

  p {
    width: 310px;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: var(--text-primary);
    margin-top: 8px;

    @media (max-width: 700px) {
      width: 80%;
    }
  }
`;
