import { useLocation, useNavigate } from 'react-router-dom';

import { Registration } from './registration/registration';
import { Authorization } from './authorization/authorization';
import { ForgotPassword } from './forgot-password/forgot-password';

import { GoBackBox, GoBackTitle } from './forgot-password/forgot-password.styled';
import { FormBox, Title, Wrapper } from './user-form.styled';

export const FormLayout = () => {

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const checkLocation = useLocation().search;

  const isRegistrationPage = pathname.includes('registration');
  const isForgotPage = pathname.includes('forgot-pass');

  return (
    <Wrapper>
      <Title>Cleverland </Title>
      <FormBox data-test-id='auth'>
        {isForgotPage && !checkLocation && (
          <GoBackBox >
            <GoBackTitle to='/auth'>Вход в личный кабинет</GoBackTitle>
          </GoBackBox>
        )}
        {isRegistrationPage ? <Registration /> : isForgotPage ? <ForgotPassword /> : <Authorization />}
      </FormBox>
    </Wrapper>
  )
};
