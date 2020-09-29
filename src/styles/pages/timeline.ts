import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  background: var(--background);
  transition: background-color 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  header {
    width: 100%;
    height: 90px;
    padding: 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;

    overflow-y: visible;

    > div {
      /* search box */
      &:first-child {
        height: 50px;
        z-index: 25;

        > div {
          width: 300px;

          @media (max-width: 700px) {
            width: unset;
            max-width: unset;
          }
        }
      }

      /* filter */
      &:last-child {
        height: 50px;
        z-index: 20;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      gap: 15px;
      height: 160px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    width: 100%;
  }

  footer {
    margin: 40px 0 20px 0;
    padding: 0 20px;
    text-align: center;
  }
`;

export const ContainerRepos = styled.ul`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  position: relative;

  padding: 40px 0;
`;

export const Line = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: -140px;
  display: block;
  width: 8px;
  height: calc(100% + 150px);
  margin-left: -3px;

  background: var(--background);
  background: linear-gradient(
    180deg,
    var(--boxSecondary) 0,
    var(--boxSecondary) calc(100% - 150px),
    var(--background) calc(100% - 10px)
  );

  transition: background 0.2s;

  @media (max-width: 700px) {
    left: 10%;
  }
`;

export const ContainerNoRepo = styled.div`
  width: 100vw;
  flex: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 40px;

  > p {
    flex: 1;
    display: flex;
    align-items: center;

    font-size: 18px;
    color: var(--textPrimary);
    font-weight: bold;

    transition: color 0.2s;

    text-align: center;
  }
`;

export const Center = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
