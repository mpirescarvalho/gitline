import styled from 'styled-components';

export const Container = styled.div`
  width: 605px;
  padding: 0 40px;

  display: flex;

  margin-top: 13px;
  margin-left: -6px;

  &.left {
    justify-content: flex-start;

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      margin-top: 10px;
      left: 50%;
      margin-left: -8px;
      border-radius: 50%;
      background: var(--box);
      border: 5px solid var(--primary);
    }

    &::after {
      content: '';
      width: 11px;
      height: 11px;
      background: var(--box);
      margin-top: 13px;
      margin-left: -6px;
      border-top: 1px solid var(--border);
      border-right: 1px solid var(--border);
      box-shadow: 2px -1px 1px -1px rgba(0, 0, 0, 0.2);
      transform: rotateZ(45deg);
    }
  }

  &.right {
    justify-content: flex-end;

    &::before {
      content: '';
      width: 11px;
      height: 11px;
      background: var(--box);
      margin-top: 13px;
      margin-right: -6px;
      border-top: 1px solid var(--border);
      border-right: 1px solid var(--border);
      transform: rotateZ(225deg);
      z-index: 5;
    }

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      margin-top: 10px;
      left: 50%;
      margin-left: -8px;
      border-radius: 50%;
      background: var(--box);
      border: 5px solid var(--primary);
    }
  }
`;

export const Item = styled.div`
  width: 235px;
  padding: 16px;
  background: var(--box);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  position: relative;
  border: 1px solid var(--border);
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

export const Date = styled.time`
  font-family: 'Russo One', sans-serif;
  font-size: 14px;
  color: var(--box);
  background: var(--secondary);
  padding: 6px 9px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  margin-bottom: 22px;
`;

export const Name = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 8px;
  color: var(--text-primary);
`;

export const Description = styled.p`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: var(--text-secondary);
`;
