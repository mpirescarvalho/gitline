import React, { useRef, useEffect } from 'react';

import useVisibility from '../../hooks/useVisibility';

import {
  Container,
  TimelinePoint,
  Arrow,
  Content,
  Item,
  Date,
  Name,
  Description,
} from './styles';

interface TimeLineItemProps {
  position?: 'left' | 'right';
  name: string;
  date: string;
  description: string;
  url: string;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  position = 'left',
  name,
  date,
  description,
  url,
}) => {
  const [isVisible, ref] = useVisibility<HTMLDivElement>(-30);
  const showed = useRef(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsTransform = {
    final: { x: 0 },
    right: { x: 300 },
    left: { x: -300 },
  };

  useEffect(() => {
    if (isVisible) showed.current = true;
  }, [isVisible]);

  return (
    <Container
      initial={isVisible ? 'visible' : 'hidden'}
      animate={isVisible || showed.current ? 'visible' : 'hidden'}
      variants={variants}
      className={position}
    >
      <TimelinePoint />
      <Content
        initial={isVisible ? 'final' : position}
        animate={isVisible || showed.current ? 'final' : position}
        variants={variantsTransform}
        className={position}
      >
        <Arrow className={position} />
        <Item ref={ref}>
          <Date>{date}</Date>
          <Name href={url} target="_blank">
            {name}
          </Name>
          <Description>{description}</Description>
        </Item>
      </Content>
    </Container>
  );
};

export default TimeLineItem;
