import * as React from 'react';
import Container from '@mui/material/Container';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <strong>{currentUser.email}</strong>
    </Container>
  );
}
