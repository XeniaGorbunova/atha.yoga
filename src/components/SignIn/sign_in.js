import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2" class="header">
            Создать аккаунт
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} class="form_container">
            <TextField
              margin="normal"
              fullWidth
              id="email"
              placeholder="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              placeholder="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container alignItems="center">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox checked value="remember" color="primary" />}
                  label="Я принимаю условия"
                />
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" class="link">
                  пользовательского
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" class="link">
                  соглашения
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Создать
            </Button>
            <Grid container spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <Typography variant="body2">
                  Уже есть аккаунт?
                </Typography>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" class="link">
                  Войти
                </Link>
              </Grid>
            </Grid>
            <Typography variant="body2">
              Или войти с помощью
            </Typography>
            <Grid container>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}