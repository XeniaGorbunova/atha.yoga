import React from 'react';
import './styles.scoped.scss';
import CssBaseline from '@mui/material/CssBaseline';
import LogInPage from './pages/logIn/index.js';
import WelcomePage from './pages/welcome/index.js';
import SignInPage from './pages/signIn/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WelcomePage />
    </ThemeProvider>
  );
}