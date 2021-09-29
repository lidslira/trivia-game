import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import themes from '~/shared/themes';

const App: React.FC = () => (
  <ThemeProvider theme={themes.light}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    <Routes />
  </ThemeProvider>
);

export default App;
