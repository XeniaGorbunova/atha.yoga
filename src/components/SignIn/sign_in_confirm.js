import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Container from '@mui/material/Container';
import letter from '../../assets/letter.svg';

export default function SignInConfirm() {
  <div className="sign_in_confirm__container">
    <img src={letter} alt="Письмо" />
    <Typography variant="h6">
      Письмо с подтверждением  регистрации отправлено
      вам на почту
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Следуйте инструкции из письма.
      Если письмо не пришло,
    </Typography>
    <Link variant="body2" underline="none">
      отправить письмо еще раз.
    </Link>
  </div>
}
