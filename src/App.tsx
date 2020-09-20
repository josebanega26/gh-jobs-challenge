import React from 'react';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme } from './utils/theme';

const defaultTheme = {
  ...theme,
  ...lightTheme,
};

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes></AppRoutes>
      </ThemeProvider>
    </div>
  );
}

export default App;
