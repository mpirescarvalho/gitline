import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 525px;
  min-height: 135px;
  margin-top: 65px;
  z-index: 15;

  transition: background-color 0.4s;
  background: var(--box);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 62px 18px 18px 18px;
  position: relative;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    width: 90%;

    svg {
      width: 80% !important;
    }
  }

  /* theme toggle button */
  > div {
    position: absolute;
    top: 8px;
    right: 8px;
    user-select: none;
  }

  img {
    width: 100px;
    height: 100px;
    transition: border-color 0.4s;
    border: 4px solid var(--box);
    background: var(--box);
    box-shadow: 0px -4px 3px -3px rgba(0, 0, 0, 0.2);
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
    color: var(--textPrimary);
    transition: color 0.3s;
    text-align: center;

    &:hover {
      color: var(--secondary);
    }
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    color: var(--textSecondary);
    transition: color 0.3s;
  }

  p {
    width: 310px;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    transition: color 0.3s;
    color: var(--textPrimary);
    margin-top: 8px;

    @media (max-width: 700px) {
      width: 80%;
    }
  }
`;
