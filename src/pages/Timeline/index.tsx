import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useLogPageView } from '../../hooks/analytics';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import NotFound from '../NotFound';
import TimelineItem from '../../components/TimelineItem';
import TimelineUser from '../../components/TimelineUser';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import Dropdown from '../../components/Dropdown';

import { Container, ContainerNoRepo, Line, ContainerRepos } from './styles';

export interface Repo {
  name: string;
  description: string;
  created_at: Date;
  html_url: string;
  pushed_at: Date;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export interface User {
  name: string;
  login: string;
  bio: string | undefined;
  avatar_url: string;
  html_url: string;
}

const Timeline: React.FC = () => {
  const [repos, setRepos] = useState<Repo[] | undefined>();
  const [user, setUser] = useState<User | undefined>();

  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const { username } = useParams();
  const { width } = useWindowDimensions();
  const isMobile = useMemo(() => width <= 600, [width]);

  const [language, setLanguage] = useState('All');
  const languages = useMemo(() => {
    const array = ['All'];
    repos?.forEach(repo => {
      if (!array.includes(repo.language)) {
        array.push(repo.language);
      }
    });
    return array;
  }, [repos]);

  const filteredRepos = useMemo(
    () =>
      repos?.filter(
        repo =>
          repo.language === (language === 'All' ? repo.language : language)
      ),
    [repos, language]
  );

  useLogPageView('home_page');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (userResponse.status !== 200) {
          throw Error('User not found');
        }

        setUser(await userResponse.json());
        setNotFound(false);

        try {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=created`
          );

          if (response.status !== 200) {
            throw Error('Repositories fetch error');
          }

          setRepos(await response.json());
        } catch (err) {
          setRepos([]);
          console.error(err);
        }
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  if (loading) {
    return <div />;
  }

  if (notFound || !user) {
    return <NotFound />;
  }

  return (
    <Container>
      <header>
        <Dropdown
          items={languages}
          selected={language}
          prefix="Language:"
          onItemSelected={setLanguage}
        />
        <SearchBox />
      </header>

      <TimelineUser user={user} />

      {filteredRepos && filteredRepos.length > 0 ? (
        <ContainerRepos>
          <Line />

          {filteredRepos.map((repo, index) => (
            <TimelineItem
              key={index}
              position={index % 2 === 0 || isMobile ? 'right' : 'left'}
              repo={repo}
            />
          ))}

          <Footer />
        </ContainerRepos>
      ) : (
        <ContainerNoRepo>
          <p>
            {repos && repos.length > 0
              ? 'No matches found for this filter'
              : `${username} doesn’t have any public repositories yet.`}
          </p>
          <Footer />
        </ContainerNoRepo>
      )}
    </Container>
  );
};

export default Timeline;
