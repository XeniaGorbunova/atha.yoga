import React from 'react';
import './styles.scoped.scss';
import CssBaseline from '@mui/material/CssBaseline';
import LogInPage from './pages/logIn/index.js';
import WelcomePage from './pages/welcome/index.js';
import SignInPage from './pages/signIn/index.js';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignInPage />
    </React.Fragment>
  );
}