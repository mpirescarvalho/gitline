import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { User } from '../../pages/timeline/[username]';

import useTheme from '../../hooks/useTheme';

import { Container } from './styles';

interface TimelineUserProps {
  user: User;
}

const TimelineUser: React.FC<TimelineUserProps> = ({ user }) => {
  const [theme, toggleTheme] = useTheme();

  //TODO: toggle responsivity

  //TODO: add more animations

  return (
    <Container>
      <div>
        {theme && (
          <DarkModeToggle
            onChange={toggleTheme}
            checked={theme === 'dark'}
            size={800 > 700 ? 65 : 50}
          />
        )}
      </div>
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
