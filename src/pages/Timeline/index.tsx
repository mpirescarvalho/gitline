import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Timeline: React.FC = () => {
  const { username } = useParams();

  return <h1>Timeline: {username}</h1>;
};

export default Timeline;
