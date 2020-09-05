import React from 'react';

import { useLogPageView } from '../../hooks/analytics';

import { Container } from './styles';

const NotFound: React.FC = () => {
  useLogPageView('not_found');

  return (
    <Container>
      <h1>404</h1>
      <h2>User not found</h2>
    </Container>
  );
};

export default NotFound;
