import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { analytics } from 'firebase/app';

import { useLogPageView } from '../../hooks/analytics';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import NotFound from '../NotFound';
import TimeLineItem from '../../components/TimeLineItem';
import Footer from '../../components/Footer';

import { Scroll, Container, ContainerNoRepo } from './styles';

interface Repo {
  name: string;
  description: string;
  created_at: Date;
  html_url: string;
}

const Timeline: React.FC = () => {
  const [repos, setRepos] = useState<Repo[] | undefined>();
  const [notFound, setNotFound] = useState(false);

  const { username } = useParams();
  const { width } = useWindowDimensions();

  useLogPageView('home_page');

  useEffect(() => {
    analytics().logEvent('view_search_results', {
      search_term: username,
    });

    fetch(`https://api.github.com/users/${username}/repos?sort=created`)
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

  if (repos) {
    if (repos.length > 0) {
      return (
        <Scroll>
          <Container>
            {repos.map((repo, index) => (
              <TimeLineItem
                key={index}
                position={index % 2 !== 0 || width <= 600 ? 'right' : 'left'}
                date={formatDate(repo.created_at)}
                name={repo.name}
                description={repo.description}
                url={repo.html_url}
              />
            ))}
          </Container>

          <Footer />
        </Scroll>
      );
    }

    return (
      <ContainerNoRepo>
        <p>{username} doesn’t have any public repositories yet.</p>
        <Footer />
      </ContainerNoRepo>
    );
  }

  return <></>;
};

export default Timeline;
