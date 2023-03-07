import { useLocation } from 'react-router-dom';

import { Authorization } from './authorization/authorization';
import { Registration } from './registration/registration';

import { FormBox, Title, Wrapper } from './user-form.styled';

export const FormLayout = () => {

  const { pathname } = useLocation();

  const isRegistrationPage = pathname.includes('registration');

  return (
    <Wrapper>
      <Title>Cleverland </Title>
      <FormBox data-test-id='auth'>
        {isRegistrationPage ? <Registration /> : <Authorization />}
      </FormBox>
    </Wrapper>
  )
};
