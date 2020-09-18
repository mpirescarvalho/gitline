import React from 'react';

// import { useLogPageView } from '../../hooks/analytics';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';

import { Container } from '../styles/pages/home';

const SearchPage: React.FC = () => {
  // useLogPageView('home_page');
  //TODO: analytics

  return (
    <Container>
      <div>
        <h1>Gitline</h1>
        <SearchBox />
      </div>

      <Footer />
    </Container>
  );
};

export default SearchPage;
