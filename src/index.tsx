import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import {ThemeProvider} from 'styled-components';
import {store} from '~/shared/store';

import Routes from './routes';
import themes from '~/shared/themes';

const App: React.FC = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={themes.light}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
