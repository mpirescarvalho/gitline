import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ColorProp {
  color: string;
  colorType?: 'light' | 'dark';
}

export const Container = styled.div`
  width: 940px;
  margin-top: 13px;
  display: flex;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding-right: 25px;
    padding-left: 25px;
  }

  @media (max-width: 700px) {
    justify-content: flex-start !important;
    margin-left: 10% !important;
    align-self: flex-start !important;
    width: 100% !important;
    padding-right: 15% !important;
    padding-left: 40px;
    margin-bottom: 13px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
  }
`;

export const TimelinePoint = styled(motion.div)<ColorProp>`
  position: absolute;
  width: 48px;
  height: 48px;
  margin-top: 10px;
  left: 50%;
  margin-left: -23px;
  border-radius: 50%;
  transition: background-color 0.4s;
  background: ${props => props.theme.colors.box};
  border: 4px solid ${props => props.color};

  @media (max-width: 700px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    margin-left: -15px;
  }
`;

export const Arrow = styled.div`
  box-sizing: content-box;
  width: 11px;
  height: 11px;
  background: ${props => props.theme.colors.box};
  margin-top: 28px;
  border-top: 1px solid ${props => props.theme.colors.border};
  border-right: 1px solid ${props => props.theme.colors.border};
  transition: background-color 0.4s;

  &.right {
    margin-right: -6px;
    transform: rotateZ(225deg);
  }

  &.left {
    margin-left: -6px;
    box-shadow: 2px -1px 1px -1px rgba(0, 0, 0, 0.2);
    transform: rotateZ(45deg);
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  width: calc(50% - 50px);

  &.right {
    flex-direction: row;
  }

  &.left {
    flex-direction: row-reverse;
  }

  @media (max-width: 700px) {
    flex: 1;
  }
`;

export const Item = styled.div`
  width: 100%;
  padding: 20px 20px 15px 20px;
  background: ${props => props.theme.colors.box};
  transition: background-color 0.4s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    flex: 1;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const Date = styled.time<ColorProp>`
  font-family: 'Russo One', sans-serif;
  font-size: 14px;
  color: ${props =>
    props.colorType === 'light'
      ? props.theme.colors.textPrimary
      : props.theme.colors.textPrimaryInBackground};
  background: ${props => props.color};
  padding: 6px 9px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const Name = styled.a`
  align-self: stretch;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: ${props => props.theme.colors.textPrimary};
  word-wrap: break-word;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Description = styled.p`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${props => props.theme.colors.textSecondary};
  transition: color 0.2s;
`;

export const Footer = styled.div`
  align-self: stretch;
  color: ${props => props.theme.colors.textPrimary};
  transition: color 0.2s;
  font-size: 12px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  row-gap: 3px;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  /* last update text */
  span {
    white-space: nowrap;
  }
`;

export const Language = styled.span<ColorProp>`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 50%;
    background: ${props => props.color};
  }
`;
