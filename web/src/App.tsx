import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin/index';

const App: React.FC = () => (
  <>
    <Signin />
    <GlobalStyle />
  </>
);

export default App;
