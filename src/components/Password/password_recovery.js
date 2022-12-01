import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function PasswordRecovery() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 4 }}>
          Восстановление пароля
        </Typography>
        <Typography variant="body2" textAlign="center">
          Мы отправим вам письмо
        </Typography>
        <Typography variant="body2" textAlign="center">
          со ссылкой для восстановления пароля
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate className="form__container">
          <TextField
            sx={{ mb: 2, mt: 1 }}
            label="Электронная почта"
            margin="normal"
            fullWidth
            id="email"
            placeholder="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
          >
            Отправить
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
