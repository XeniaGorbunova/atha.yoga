import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import letter from '../../assets/letter.svg';

export default function SignInConfirm() {
  <div className="sign_in_confirm__container">
    <img src={letter} alt="Письмо" />
    <Typography variant="h6">
      Письмо с подтверждением регистрации отправлено
      вам на почту
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Следуйте инструкции из письма.
      Если письмо не пришло,
    </Typography>
    <Link href="#" variant="body2" underline="none">
      отправить письмо еще раз.
    </Link>
  </div>
}
