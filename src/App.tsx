import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={lightTheme}>
        <AppRoutes></AppRoutes>
      </ThemeProvider>
    </div>
  );
}

export default App;
