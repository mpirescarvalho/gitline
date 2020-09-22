import React, { useEffect, useState, useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import MoonLoader from 'react-spinners/MoonLoader';

import useLangFilter from '../../hooks/useLangFilter';
import { useLogPageView } from '../../hooks/analytics';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import NotFound from '../404';
import TimelineItem from '../../components/TimelineItem';
import TimelineUser from '../../components/TimelineUser';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import Dropdown from '../../components/Dropdown';

import {
  Container,
  ContainerNoRepo,
  Line,
  ContainerRepos,
  Center,
} from '../../styles/pages/timeline';

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

interface TimelineProps {
  repos?: Repo[];
  user?: User;
  rateExceeded: boolean;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let user: User = null;
  let repos: Repo[] = null;
  let props = {};
  let rateExceeded = false;

  const username = params.username;

  const userResponse = await fetch(`https://api.github.com/users/${username}`);

  rateExceeded = userResponse.status === 403;

  if (userResponse.status === 200) {
    const {
      name: user_full_name,
      login,
      bio,
      avatar_url,
      html_url,
    } = await userResponse.json();

    user = {
      name: user_full_name,
      login,
      bio,
      avatar_url,
      html_url,
    };
  } else {
    console.error(userResponse.status, userResponse.statusText);
  }

  if (!rateExceeded) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created`
    );

    rateExceeded = response.status === 403;

    if (response.status === 200) {
      repos = ((await response.json()) as Repo[]).map(
        ({
          name,
          description,
          created_at,
          html_url,
          pushed_at,
          language,
          stargazers_count,
          forks_count,
        }) => ({
          name,
          description,
          created_at,
          html_url,
          pushed_at,
          language,
          stargazers_count,
          forks_count,
        })
      );
    } else {
      console.error(response.status, response.statusText);
    }
  }

  if (user && repos) {
    props = {
      user,
      repos,
    };
  }

  return {
    props: {
      ...props,
      rateExceeded,
    },
    revalidate: 1,
  };
};

const Timeline = ({ user, repos, rateExceeded }: TimelineProps) => {
  // const { width } = useWindowDimensions();
  // const isMobile = useMemo(() => width <= 600, [width]);

  const language = useLangFilter();

  const languages = useMemo(() => {
    const array = ['All'];
    repos?.forEach(repo => {
      if (repo.language && !array.includes(repo.language)) {
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

  const router = useRouter();

  //TODO: analytics
  // useLogPageView('home_page');

  //TODO: get github api key for server-server requests
  //TODO: custom error page. use next error?
  if (rateExceeded) {
    return <div>Rate limit exceeded, try again later.</div>;
  }

  if (router.isFallback) {
    return (
      <Center>
        <MoonLoader color="#9B1768" />
      </Center>
    );
  }

  if (!user) {
    return <NotFound user />;
  }

  return (
    <Container>
      <header>
        <div>
          <SearchBox />
        </div>
        <div>
          <Dropdown items={languages} selected={language} prefix="Language:" />
        </div>
      </header>

      <TimelineUser user={user} />

      {filteredRepos && filteredRepos.length > 0 ? (
        <ContainerRepos>
          <Line />

          {filteredRepos.map((repo, index) => (
            // <TimelineItem
            //   key={index}
            //   position={index % 2 === 0 || isMobile ? 'right' : 'left'}
            //   repo={repo}
            // />
            <TimelineItem
              key={index}
              position={index % 2 === 0 || false ? 'right' : 'left'}
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
              : `${user.login} doesn’t have any public repositories yet.`}
          </p>
          <Footer />
        </ContainerNoRepo>
      )}
    </Container>
  );
};

export default Timeline;
