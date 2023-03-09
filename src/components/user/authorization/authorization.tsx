import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IError, useAuthUserMutation } from '../../../store/books-info-api';

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
  InputWrapper,
  TextHelp
} from '../user-form.styled';
import { TextError, UpdateButton } from './authorization.styled';

export interface IStatusError {
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

  const { status } = error as IStatusError || {};

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  function onSubmit(data: any) {
    authUser(data).then((result) => {

      const { error } = result as IError || {};
      if (!error) {
        navigate('/');
      }
    })
  };

  function handlerClick() {
    navigate('/registration')
  };

  const handler = onSubmit;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
      {isLoading
        ? <Loader />
        : error && status !== 400
          ? <InfoPopup title='Вход не выполнен' text='Что-то пошло не так. Попробуйте еще раз' buttonText='Повторить' handler={handler} />
          : (<><FormTitle>Вход в личный кабинет</FormTitle>
            <FormWrapper className={isError ? 'error' : ''}>
              <InputWrapper>
                <Input {...register('identifier', { required: true })} id="identifier" placeholder=" " />
                <InputLabel htmlFor="identifier">Логин</InputLabel>
              </InputWrapper>

            </FormWrapper>
            <FormWrapper className={isError ? 'error' : ''}>
              <InputWrapper>
                <Input {...register('password', { required: true })} type={isVisiblePassword ? 'text' : 'password'} id="password" placeholder=" " />
                <InputLabel htmlFor="password">Пароль</InputLabel>
                <InputIcon data-test-id={isVisiblePassword ? 'eye-opened' : 'eye-closed'} className={isVisiblePassword ? 'visible' : 'hidden'} onClick={() => setIsVisiblePassword(!isVisiblePassword)} type='button' />
              </InputWrapper>

            </FormWrapper>
            {status === 400
              ? <TextError onClick={() => navigate('/forgot-pass')}><span>Неверный логин или пароль!</span>Восстановить?</TextError>
              : <UpdateButton onClick={() => navigate('/forgot-pass')}>Забыли логин или пароль?</UpdateButton>}
            <FormButton>Вход</FormButton>
            <BoxInfo>
              <TextHelp>Нет учётной записи?</TextHelp>
              <Button onClick={() => handlerClick()}>Регистрация</Button>
            </BoxInfo></>)}
    </Form>
  )
};
