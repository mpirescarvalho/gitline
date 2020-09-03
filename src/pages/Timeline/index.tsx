import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFound from '../NotFound';
import TimeLineItem from '../../components/TimeLineItem';

import { Scroll, Container } from './styles';

interface Repo {
  name: string;
  description: string;
  created_at: Date;
}

const Timeline: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [notFound, setNotFound] = useState(false);

  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if (response.status === 404) {
          setNotFound(true);
          return;
        }
        return response.json();
      })
      .then((repositories: Repo[]) => setRepos(repositories))
      .catch(err => {
        console.error(err);
        setNotFound(true);
      });
  }, [username]);

  function formatDate(date: Date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${mo} ${da} ${ye}`;
  }

  if (notFound) {
    return <NotFound />;
  }

  if (repos.length > 0) {
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
  }

  return <></>;
};

export default Timeline;
