import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import themes from '~/shared/themes';

// import Routes from './routes';
import Categories from '~/shared/views/Categories';

const App: React.FC = () => (
  <ThemeProvider theme={themes.light}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    <Categories />
  </ThemeProvider>
);

export default App;
