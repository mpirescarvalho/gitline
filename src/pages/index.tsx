import React from 'react';
import Head from 'next/head';

import { useLogPageView } from '../hooks/analytics';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';

import { Container } from '../styles/pages/home';

const SearchPage: React.FC = () => {
  useLogPageView('home_page');

  return (
    <Container>
      <Head>
        <title>
          Gitline · Your github repositories history beatifuly structured
        </title>
        <meta
          name="description"
          content="Gitline is the right place to view your github repositories timeline beatifuly organized and sorted by creation date. Filter them by the main language and share with anyone you want."
        />
      </Head>

      <main>
        <h1>Gitline</h1>
        <SearchBox />
      </main>

      <Footer />
    </Container>
  );
};

export default SearchPage;
