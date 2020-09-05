import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/analytics';

import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/__/firebase/init.json').then(async response => {
      firebase.initializeApp(await response.json());
      firebase.analytics();
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && <Routes />}
      <GlobalStyles />
    </>
  );
}

export default App;
