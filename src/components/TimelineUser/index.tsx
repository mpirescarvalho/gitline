import React, { useCallback } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { motion } from 'framer-motion';
import '../../firebase/initFirebase';
import { analytics } from 'firebase/app';

import { User } from '../../pages/timeline/[username]';

import useTheme from '../../hooks/useTheme';

import { Container } from './styles';

interface TimelineUserProps {
  user: User;
}

const TimelineUser: React.FC<TimelineUserProps> = ({ user }) => {
  const [theme, toggleTheme] = useTheme();

  const handleThemeChange = useCallback(() => {
    analytics().logEvent<string>('toggle_theme', {
      from_theme: theme,
      to_theme: theme === 'dark' ? 'light' : 'dark',
    });

    toggleTheme();
  }, [theme]);

  return (
    <Container
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: [0.24, 1.02, 0.66, 0.99],
        duration: 1,
      }}
    >
      <div>
        {theme && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DarkModeToggle
              onChange={handleThemeChange}
              checked={theme === 'dark'}
              size={65}
            />
          </motion.div>
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
