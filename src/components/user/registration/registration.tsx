import React, { useEffect, useMemo, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { IError, useRegistrationUserMutation } from '../../../store/books-info-api';
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
  InputWrapper,
  TextHelp
} from '../user-form.styled';
import {
  StepsInfo,
  TextHelper
} from './registration.styled';
import { TextHelperError } from '../forgot-password/forgot-password.styled';


export interface IStatusError {
  status: number;
  name: string;
  message: string;
  details: object
}

export const Registration = () => {


  const validationSchema = yup.object().shape({
    username: yup.string()
      .required('Поле не может быть пустым')
    ,
    password: yup.string().required('Поле не может быть пустым').min(8),
    firstName: yup.string().required('Поле не может быть пустым'),
    lastName: yup.string().required('Поле не может быть пустым'),
    phone: yup.number().required('Поле не может быть пустым'),
    email: yup.string().required('Поле не может быть пустым'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // clearErrors,
  } = useForm(
    {
      resolver: yupResolver(validationSchema),
      mode: 'onBlur',
      defaultValues: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      },

    });

  const [registrationUser, { isLoading, isSuccess, error: errorReg }] = useRegistrationUserMutation();

  // console.log(!!errors.username?.message)
  // console.log(errors)


  console.log(errors)

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isErrors, setIsErrors] = useState(false)
  const token = getLoginToken();

  const { status } = errorReg as IStatusError || {};

  function onSubmit(data: any) {
    console.log(data)
    registrationUser(data).then((result) => {
      const { error } = result as IError || {};

      if (error) {
        setIsErrors(true)
      }
    })
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

  const title = errorReg ? 'Данные не сохранились' : 'Регистрация успешна';
  const text = errorReg && status === 400
    ? 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.'
    : errorReg && status !== 400
      ? 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз'
      : 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль';
  const buttonText = errorReg && status === 400
    ? 'Назад к регистрации'
    : errorReg && status !== 400
      ? 'Повторить'
      : 'Вход';


  function handlerButtonPopup() {
    if (errorReg && status === 400) {
      setIsErrors(false)
      navigate('/registration')
      setStep(1)
      reset()
    }
    if (!errorReg && status !== 400) {
      navigate('/auth')
    }
  }

  const handler = errorReg && status !== 400 ? onSubmit : handlerButtonPopup;

  const content = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <React.Fragment>
            <FormWrapper>
              <InputWrapper>
                <Input
                  id="userName"
                  placeholder=" "
                  {...register('username', { required: true })}
                  type='text' autoComplete="off"
                  name='username'
                // onFocus={() => {
                //   // console.log('q')

                //   // clearErrors('username');




                // }}
                />
                <InputLabel htmlFor="userName">Придумайте логин для входа</InputLabel>
              </InputWrapper>
            </FormWrapper>
            {errors?.username?.message && <TextHelperError><span>{errors.username?.message}</span></TextHelperError>}
            {/* <TextHelper data-test-id='hint' className={errors?.username?.message ? 'error' : ''}>Используйте для логина латинский алфавит и цифры</TextHelper> */}
            <TextHelper data-test-id='hint'>Используйте для логина латинский алфавит и цифры</TextHelper>
            <FormWrapper>
              <InputWrapper>
                <Input id="password" placeholder=" " {...register('password', { required: true })} type='password' autoComplete="off" name='password' />
                <InputLabel htmlFor="password">Пароль</InputLabel>
              </InputWrapper>
            </FormWrapper>
            <TextHelper data-test-id='hint'>Пароль не менее 8 символов, с заглавной буквой и цифрой</TextHelper>
          </React.Fragment >
        );
      case 2:
        return (
          <React.Fragment>
            <FormWrapper>
              <InputWrapper>
                <Input id="firstName" placeholder=" " {...register('firstName', { required: true })} type='text' autoComplete="off" name='firstName' />
                <InputLabel htmlFor="firstName">Имя</InputLabel>
              </InputWrapper>

            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
            <FormWrapper>
              <InputWrapper>
                <Input id="lastName" placeholder=" " {...register('lastName', { required: true })} type='text' autoComplete="off" name='lastName' />
                <InputLabel htmlFor="lastName">Фамилия</InputLabel>
              </InputWrapper>

            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
          </React.Fragment >
        );
      case 3:
        return (
          <React.Fragment>
            <FormWrapper>
              <InputWrapper>
                <Input id="phone" placeholder=" " {...register('phone', { required: true })} type='phone' autoComplete="off" name='phone' />
                <InputLabel htmlFor="phone">Номер телефона</InputLabel>
              </InputWrapper>

            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
            <FormWrapper>
              <InputWrapper>
                <Input id="email" placeholder=" " {...register('email', { required: true })} autoComplete="off" name='email' />
                <InputLabel htmlFor="email">E-mail</InputLabel>
              </InputWrapper>

            </FormWrapper>
            <TextHelper data-test-id='hint'>1</TextHelper>
          </React.Fragment >
        );
      default:
        return null;
    }
    // }, [step, register, errors, clearErrors])
  }, [step, register])






  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>

      {isLoading
        ? <Loader />
        : isSuccess || isErrors
          ? < InfoPopup title={title} text={text} buttonText={buttonText} handler={handler} />
          : <> <FormTitle>Регистрация</FormTitle>
            <StepsInfo>{step} шаг из 3</StepsInfo>
            {content}
            <FormButton className='step1' onClick={() => handlerClick()} >
              {step === 1 ? 'Следующий шаг' : step === 2 ? 'Последний шаг' : 'Зарегистрироваться'}
            </FormButton>
            <BoxInfo>
              <TextHelp>Есть учётная запись?</TextHelp>
              <Button className='authorization' onClick={() => navigate('/auth')}>Войти</Button>
            </BoxInfo>

          </>}
    </Form>

  )
};