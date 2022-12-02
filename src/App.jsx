import React from 'react';
import './styles.scoped.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogInPage from './pages/logIn/index.js';
import WelcomePage from './pages/welcome/index.js';
import SignInPage from './pages/signIn/index.js';
import SignInDefaultPage from './pages/signInDefault';
import SignInErrorPage from './pages/signInError';
import LogInErrorPage from './pages/logInError/index.js';
import SignInConfirmPage from './pages/signInConfirm';
import ChangePasswordPage from './pages/changePassword';
import PasswordRecoveryPage from './pages/passwordRecovery';
import PasswordRecoveryErrorPage from './pages/passwordRecoveryError';
import LogInBlockedPage from './pages/logInBlocked';
import ProfilePage from './pages/profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D6EFD',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
  typography: {
    h4: {
      fontWeight: 500,
    },
    h1: {
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: 1.2,
    },
  },
});

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignInErrorPage />
    </ThemeProvider>
  );
}
