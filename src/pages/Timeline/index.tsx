import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TimeLineItem from '../../components/TimeLineItem';

import { Scroll, Container } from './styles';

interface Repo {
  name: string;
  description: string;
  created_at: Date;
}

const Timeline: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then((repositories: Repo[]) => setRepos(repositories))
      .catch(console.error);
  }, [username]);

  function formatDate(date: Date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${mo} ${da} ${ye}`;
  }

  return (
    <Scroll>
      <Container>
        {repos.map((repo, index) => (
          <TimeLineItem
            position={index % 2 === 0 ? 'left' : 'right'}
            date={formatDate(repo.created_at)}
            name={repo.name}
            description={repo.description}
          />
        ))}
      </Container>
    </Scroll>
  );
};

export default Timeline;
