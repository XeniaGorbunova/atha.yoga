import React from 'react';
import './styles.scoped.scss';
import CssBaseline from '@mui/material/CssBaseline';
import LogIn from './components/SignIn/log_in.js';
import SignUp from './components/SignIn/sign_in.js';
import WelcomePage from './pages/welcome/index.js';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <WelcomePage />
    </React.Fragment>
  );
}