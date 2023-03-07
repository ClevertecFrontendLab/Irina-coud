import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthUserMutation } from '../../../store/books-info-api';

import { getLoginToken } from '../../../utils/get-token';
import { Loader } from '../../loader/loader';
import { InfoPopup } from '../info-popup/info-popup';
import {
  BoxInfo,
  Button,
  Form,
  FormButton,
  FormTitle,
  FormWrapper,
  Input,
  InputIcon,
  InputLabel,
  TextHelp
} from '../user-form.styled';
import { TextError, UpdateButton } from './authorization.styled';

export interface IError {
  status: number;
  name: string;
  message: string;
  details: object
}

export const Authorization = () => {

  const { register, handleSubmit } = useForm();

  const token = getLoginToken();

  const navigate = useNavigate();

  const [authUser, { isLoading, isError, error }] = useAuthUserMutation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  function onSubmit(data: any) {
    authUser(data).then((result) => enterSite(result));
  };

  function enterSite(result: any) {
    if (!result.error) {
      navigate('/');
    }
  };

  function handlerClick() {
    navigate('/registration')
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
      {isLoading ? <Loader /> : (<><FormTitle>Вход в личный кабинет</FormTitle>
        <FormWrapper className={isError ? 'error' : ''}>
          <Input {...register('identifier', { required: true })} id="identifier" placeholder=" " />
          <InputLabel htmlFor="identifier">Логин</InputLabel>
        </FormWrapper>
        <FormWrapper className={isError ? 'error' : ''}>
          <Input {...register('password', { required: true })} type={isVisiblePassword ? 'text' : 'password'} id="password" placeholder=" " />
          <InputLabel htmlFor="password">Пароль</InputLabel>
          <InputIcon data-test-id={isVisiblePassword ? 'eye-opened' : 'eye-closed'} className={isVisiblePassword ? 'visible' : 'hidden'} onClick={() => setIsVisiblePassword(!isVisiblePassword)} type='button' />
        </FormWrapper>
        {error?.status === 400
          ? <TextError to='/forgot-pass'><span>Неверный логин или пароль!</span>Восстановить?</TextError>
          : <UpdateButton to='/forgot-pass'>Забыли логин или пароль?</UpdateButton>}
        <FormButton>Вход</FormButton>
        <BoxInfo>
          <TextHelp>Нет учётной записи?</TextHelp>
          <Button onClick={() => handlerClick()}>Регистрация</Button>
        </BoxInfo></>)}
      {error && error?.status !== 400 && <InfoPopup />}
    </Form>
  )
};
