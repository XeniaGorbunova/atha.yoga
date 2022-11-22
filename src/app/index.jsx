import React from 'react';
import './style.scss';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './components/SignIn/sign_in_default.js';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignIn />
    </React.Fragment>
  );
}