import React, { useEffect, useMemo, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useRegistrationUserMutation } from '../../../store/books-info-api';
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
  InputLabel,
  TextHelp
} from '../user-form.styled';
import {
  StepsInfo,
  TextHelper
} from './registration.styled';


export interface IError {
  status: number;
  name: string;
  message: string;
  details: object
}

export const Registration = () => {

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  });

  const [registrationUser, { isError, isLoading, isSuccess, error }] = useRegistrationUserMutation();

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const token = getLoginToken();

  function onSubmit(data: any) {
    registrationUser(data);

  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  function handlerClick() {
    if (step < 3) {
      setStep((i) => i + 1)
    }
  };


  const title = error && error.status === 400 ? 'Данные не сохранились' : 'Регистрация успешна';
  const text = error && error.status === 400
    ? 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.'
    : error && error.status !== 400
      ? 'Что-то пошло не так и ваша регистрацияне завершилась. Попробуйте ещё раз'
      : 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль';
  const buttonText = error && error.status === 400
    ? 'Назад к регистрации'
    : error && error.status !== 400
      ? 'Повторить'
      : 'Вход';



  function handlerButtonPopup() {
    if (error && error.status === 400) {
      setStep(1)
      navigate(-1)
      navigate('/registration')
    }
    if (error && error.status !== 400) {
      navigate('/auth')
      console.log('!!!')
    }
  }

  const handler = error && error.status !== 400 ? onSubmit : handlerButtonPopup;

  const content = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <React.Fragment>
            <FormWrapper>
              <Input id="userName" placeholder=" " {...register('username', { required: true })} type='text' autoComplete="off" />
              <InputLabel htmlFor="userName">Придумайте логин для входа</InputLabel>
            </FormWrapper>
            <TextHelper data-test-id='hint'>Используйте для логина латинский алфавит и цифры</TextHelper>
            <FormWrapper>
              <Input id="password" placeholder=" " {...register('password', { required: true })} type='password' autoComplete="off" />
              <InputLabel htmlFor="password">Пароль</InputLabel>
            </FormWrapper>
            <TextHelper data-test-id='hint'>Пароль не менее 8 символов, с заглавной буквой и цифрой</TextHelper>
          </React.Fragment >
        );
      case 2:
        return (
          <React.Fragment>
            <FormWrapper>
              <Input id="firstName" placeholder=" " {...register('firstName', { required: true })} type='text' autoComplete="off" />
              <InputLabel htmlFor="firstName">Имя</InputLabel>
            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
            <FormWrapper>
              <Input id="lastName" placeholder=" " {...register('lastName', { required: true })} type='text' autoComplete="off" />
              <InputLabel htmlFor="lastName">Фамилия</InputLabel>
            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
          </React.Fragment >
        );
      case 3:
        return (
          <React.Fragment>
            <FormWrapper>
              <Input id="phone" placeholder=" " {...register('phone', { required: true })} type='phone' autoComplete="off" />
              <InputLabel htmlFor="phone">Номер телефона</InputLabel>
            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
            <FormWrapper>
              <Input id="email" placeholder=" " {...register('email', { required: true })} type='email' autoComplete="off" />
              <InputLabel htmlFor="email">E-mail</InputLabel>
            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
          </React.Fragment >
        );
      default:
        return null;
    }
  }, [step, register])

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>

      {isLoading
        ? <Loader />
        : isSuccess || isError || error?.status === 400
          ? < InfoPopup title={title} text={text} buttonText={buttonText} handler={handler} />
          : <> <FormTitle>Регистрация</FormTitle>
            <StepsInfo>{step} шаг из 3</StepsInfo>
            {content}
            <FormButton className='step1' onClick={() => handlerClick()}>
              {step === 1 ? 'Следующий шаг' : step === 2 ? 'Последний шаг' : 'Зарегистрироваться'}
            </FormButton>
            <BoxInfo>
              <TextHelp>Есть учётная запись?</TextHelp>
              <Button className='authorization' onClick={() => navigate('/')}>Войти</Button>
            </BoxInfo>

          </>}
    </Form>

  )
};