import React from 'react';
import '../../firebase/initFirebase';
import { analytics } from 'firebase/app';

import { Container } from './styles';

const Footer: React.FC = () => {
  function handleCreatorClick() {
    analytics().logEvent<string>('creator_click');
  }

  function handleRepoClick() {
    analytics().logEvent<string>('repo_click');
  }

  return (
    <Container>
      <span>
        Made by{' '}
        <a
          onClick={handleCreatorClick}
          href="https://github.com/mpirescarvalho"
        >
          Marcelo
        </a>{' '}
        💻 Find this on{' '}
        <a
          onClick={handleRepoClick}
          href="https://github.com/mpirescarvalho/gitline"
        >
          Github
        </a>{' '}
        ✨
      </span>
    </Container>
  );
};

export default Footer;
