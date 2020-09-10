import React from 'react';

import { User } from '../../pages/Timeline';

import { Container } from './styles';

interface TimelineUserProps {
  user: User;
}

const TimelineUser: React.FC<TimelineUserProps> = ({ user }) => {
  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />
      <h1>
        <a href={user.html_url} target="_blank">
          {user.name}
        </a>
      </h1>
      <h2>{user.login}</h2>
      {user.bio && <p>{user.bio}</p>}
    </Container>
  );
};

export default TimelineUser;
