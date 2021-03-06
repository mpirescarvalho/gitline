import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import MoonLoader from 'react-spinners/MoonLoader';
import Error from 'next/error';
import { motion } from 'framer-motion';
import '../../firebase/initFirebase';
import { analytics } from 'firebase/app';
import Head from 'next/head';

import useLangFilter from '../../hooks/useLangFilter';
import { useLogPageView } from '../../hooks/analytics';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { authFetch } from '../../utils';

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
  id: number;
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

  const userResponse = await authFetch(
    `https://api.github.com/users/${username}`
  );

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
    const response = await authFetch(
      `https://api.github.com/users/${username}/repos?sort=created`
    );

    rateExceeded = response.status === 403;

    if (response.status === 200) {
      repos = ((await response.json()) as Repo[]).map(
        ({
          id,
          name,
          description,
          created_at,
          html_url,
          pushed_at,
          language,
          stargazers_count,
          forks_count,
        }) => ({
          id,
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
    revalidate: 10,
  };
};

const Timeline = ({ user, repos, rateExceeded }: TimelineProps) => {
  const { width } = useWindowDimensions();
  const isMobile = useMemo(() => width && width <= 700, [width]);

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

  const filteredRepos = useMemo(() => {
    if (language !== 'All') {
      analytics().logEvent<string>('filter', {
        user: user.login,
        lang: language,
      });
    }

    return repos?.filter(
      repo => repo.language === (language === 'All' ? repo.language : language)
    );
  }, [repos, language]);

  const router = useRouter();

  useLogPageView('rate_limit', () => rateExceeded);
  useLogPageView('timeline', () => !!user);

  if (rateExceeded) {
    return (
      <Error statusCode={403} title="Rate limit exceeded, try again later" />
    );
  }

  if (router.isFallback) {
    return (
      <Center>
        <Head>
          <title>
            Gitline · Your github repositories history beatifuly structured
          </title>
          <meta
            name="description"
            content="Gitline is the right place to view your github repositories timeline beatifuly organized and sorted by creation date. Filter them by the main language and share with anyone you want."
          />
        </Head>

        <MoonLoader color="#9B1768" />
      </Center>
    );
  }

  if (!user) {
    return <NotFound user />;
  }

  return (
    <Container>
      <Head>
        <title>
          {user.login} {user.name && `(${user.name})`} · Gitline
        </title>
        <meta
          name="description"
          content="Gitline is the right place to view your github repositories timeline beatifuly organized and sorted by creation date. Filter them by the main language and share with anyone you want."
        />
      </Head>

      <header>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.24, 1.02, 0.66, 0.99],
            duration: 1,
          }}
        >
          <SearchBox />
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.24, 1.02, 0.66, 0.99],
            duration: 1,
          }}
        >
          <Dropdown items={languages} selected={language} prefix="Language:" />
        </motion.div>
      </header>

      <main>
        <TimelineUser user={user} />

        {filteredRepos && filteredRepos.length > 0 ? (
          <ContainerRepos>
            <Line
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: [0.24, 1.02, 0.66, 0.99], duration: 1 }}
            />

            {filteredRepos.map((repo, index) => (
              <TimelineItem
                key={repo.id}
                position={index % 2 === 0 || isMobile ? 'right' : 'left'}
                repo={repo}
                alwaysVisible={index === 0}
              />
            ))}
          </ContainerRepos>
        ) : (
          <ContainerNoRepo>
            <p>
              {repos && repos.length > 0
                ? 'No matches found for this filter'
                : `${user.login} doesn’t have any public repositories yet.`}
            </p>
          </ContainerNoRepo>
        )}
      </main>

      <Footer />
    </Container>
  );
};

export default Timeline;
