import styled from 'styled-components';

export const Scroll = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 90px 0;
  position: relative;

  /* Line */
  &::before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 8px;
    height: 100%;
    margin-left: -3px;

    background: var(--background);
    background: linear-gradient(
      180deg,
      var(--background) 1%,
      var(--box-secondary) 5%,
      var(--box-secondary) 95%,
      var(--background) 99%
    );
  }
`;
