import { useLocation, useNavigate } from 'react-router-dom';
import { useForgotPasswordMutation } from '../../store/books-info-api';

import { Authorization } from './authorization/authorization';
import { ForgotPassword } from './forgot-password/forgot-password';
import { GoBackBox, GoBackTitle } from './forgot-password/forgot-password.styled';
import { Registration } from './registration/registration';

import { FormBox, Title, Wrapper } from './user-form.styled';

export const FormLayout = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const [ { isSuccess }] = useForgotPasswordMutation();

  const isRegistrationPage = pathname.includes('registration');
  const isForgotPage = pathname.includes('forgot-pass');

  return (
    <Wrapper>
      <Title>Cleverland </Title>
      <FormBox data-test-id='auth'>
        {isForgotPage ? (
          <GoBackBox >
            <GoBackTitle onClick={() => navigate('/auth')}>Вход в личный кабинет</GoBackTitle>
          </GoBackBox>
        ) : ''}
        {isRegistrationPage ? <Registration /> : isForgotPage ? <ForgotPassword /> : <Authorization />}
      </FormBox>
    </Wrapper>
  )
};
