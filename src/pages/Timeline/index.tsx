import React from 'react';
import { useParams } from 'react-router-dom';

import TimeLineItem from '../../components/TimeLineItem';

import { Scroll, Container } from './styles';

const Timeline: React.FC = () => {
  const { username } = useParams();

  return (
    <Scroll>
      <Container>
        <TimeLineItem
          position="left"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />

        <TimeLineItem
          position="right"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />

        <TimeLineItem
          position="left"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />

        <TimeLineItem
          position="right"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />

        <TimeLineItem
          position="left"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />

        <TimeLineItem
          position="right"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />

        <TimeLineItem
          position="left"
          date="May 2020"
          name="react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        />
      </Container>
    </Scroll>
  );
};

export default Timeline;
