import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/analytics';

import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('/__/firebase/init.json');

      let firebaseConfig = {};

      if (process.env.NODE_ENV === 'development') {
        firebaseConfig = {
          apiKey: process.env.REACT_APP_API_KEY,
          authDomain: process.env.REACT_APP_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_DATABASE_URL,
          projectId: process.env.REACT_APP_PROJECT_ID,
          storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
          appId: process.env.REACT_APP_APP_ID,
          measurementId: process.env.REACT_APP_MEASUREMENT_ID,
        };
      } else {
        firebaseConfig = await response.json();
      }

      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {!loading && <Routes />}
      <GlobalStyles />
    </>
  );
}

export default App;
