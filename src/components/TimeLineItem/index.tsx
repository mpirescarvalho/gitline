import React from 'react';

import { Container, Item, Date, Name, Description } from './styles';

interface TimeLineItemProps {
  position?: 'left' | 'right';
  name: string;
  date: string;
  description: string;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  position = 'left',
  name,
  date,
  description,
}) => {
  return (
    <Container className={position}>
      <Item className={position}>
        <Date>{date}</Date>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Item>
    </Container>
  );
};

export default TimeLineItem;
