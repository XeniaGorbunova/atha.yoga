import React from 'react';
import './styles.scoped.scss';
import CssBaseline from '@mui/material/CssBaseline';
import LogIn from './components/SignIn/log_in.js';
import SignUp from './components/SignIn/sign_in.js';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignUp />
    </React.Fragment>
  );
}