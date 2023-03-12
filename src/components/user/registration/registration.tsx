import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { Loader } from '../../loader/loader';
import { InfoPopup } from '../info-popup/info-popup';

import {
  CHECK_BY_PHONE_NUMBER,
  CHECK_CAPITAL_LETTER,
  CHECK_EMAIL,
  CHECK_LATIN_LETTERS,
  CHECK_MIN_LENGTH_PASSWORD,
  CHECK_NUMBERS
} from '../../../constants';

import { IError, IPayloadRegister, useRegistrationUserMutation } from '../../../store/books-info-api';
import { getLoginToken } from '../../../utils/get-token';

import {
  BoxInfo,
  Button,
  CheckIcon,
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
import {
  ErrorHighlight,
  InputPhone,
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

  const [registrationUser, { isLoading, isSuccess, error: errorReg }] = useRegistrationUserMutation();

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isErrors, setIsErrors] = useState(false);
  const [isBlurUsername, setIsBlurUsername] = useState(false);
  const [isBlurPassword, setIsBlurPassword] = useState(false);
  const [isFocusPhone, setIsFocusPhone] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const token = getLoginToken();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  const { status } = errorReg as IStatusError || {};

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

  const handler = () => errorReg && status !== 400 ? handleSubmit(onSubmit) : handlerButtonPopup();

  const schema1 = yup.object().shape({
    username: yup.string()
      .required('Поле не может быть пустым')
      .matches(CHECK_LATIN_LETTERS, 'латинский алфавит')
      .matches(CHECK_NUMBERS, 'цифры')
    ,
    password: yup.string()
      .required('Поле не может быть пустым')
      .matches(CHECK_MIN_LENGTH_PASSWORD, 'не менее 8 символов')
      .matches(CHECK_CAPITAL_LETTER, 'заглавной буквой')
      .matches(CHECK_NUMBERS, 'цифрой'),
  })
  const schema2 = yup.object().shape({
    firstName: yup.string().required('Поле не может быть пустым'),
    lastName: yup.string().required('Поле не может быть пустым'),
  })
  const schema3 = yup.object().shape({
    phone: yup.string().required('Поле не может быть пустым')
      .matches(CHECK_BY_PHONE_NUMBER, 'В формате +375 (xx) xxx-xx-xx'),
    email: yup.string().required('Поле не может быть пустым')
      .matches(CHECK_EMAIL, 'Введите корректный e-mail'),
  })

  const validationSchema = step === 1 ? schema1 : step === 2 ? schema2 : schema3;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm(
    {

      mode: 'all',
      defaultValues: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      },
      criteriaMode: 'all',
      reValidateMode: 'onBlur',
      shouldFocusError: false,
      resolver: yupResolver(validationSchema),
    });

  const isEmptyErrors = !Object.keys(errors).length;

  const errorsPassword = errors?.password?.types?.matches as string || '';
  const errorsUsername = errors?.username?.types?.matches as string || '';

  const watchPasswordField = watch('password');
  const watchUsernameField = watch('username');

  function onSubmit(data: IPayloadRegister) {
    if (step < 3) {
      setStep((i) => i + 1)
    }

    if (step === 3 && isEmptyErrors) {
      registrationUser(data).then((result) => {
        const { error } = result as IError || {};

        if (error) {
          setIsErrors(true)
        }
      })
    }
  };

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

  const userNameAttr = register('username');
  const passwordAttr = register('password');

  const content = function () {
    switch (step) {
      case 1:
        return (
          <React.Fragment>
            <FormWrapper className={errors.username ? 'error' : ''}>
              <InputWrapper>
                <Input
                  id="userName"
                  placeholder=" "
                  {...userNameAttr}
                  type='text'
                  autoComplete="off"
                  name='username'
                  onFocus={() => {
                    setIsBlurUsername(false)
                  }}
                  onBlur={(event) => {
                    userNameAttr.onBlur(event);
                    setIsBlurUsername(true)
                  }}
                />
                <InputLabel htmlFor="userName">Придумайте логин для входа</InputLabel>
              </InputWrapper>
            </FormWrapper>
            {errors?.username?.type === 'required' && isBlurUsername
              ? <TextHelperError data-test-id='hint'><span>{errors.username?.message}</span></TextHelperError>
              : (<TextHelper data-test-id='hint' className={isBlurUsername && errors.username ? 'active' : ''}>
                Используйте для логина
                <ErrorHighlight
                  className={errorsUsername.includes('латинский алфавит') && watchUsernameField ? 'active' : ''}>латинский алфавит</ErrorHighlight> и <ErrorHighlight className={errorsUsername.includes('цифры') && watchUsernameField ? 'active' : ''}>цифры</ErrorHighlight>
              </TextHelper>)
            }
            <FormWrapper className={errors.password ? 'error' : ''}>
              <InputWrapper>
                <Input
                  id="password"
                  placeholder=" "
                  {...passwordAttr}
                  type={isVisiblePassword ? 'text' : 'password'}
                  autoComplete="off"
                  name='password'
                  onFocus={() => {
                    setIsBlurPassword(false)
                  }}
                  onBlur={(event) => {
                    passwordAttr.onBlur(event)

                    setIsBlurPassword(true)
                  }} />
                <InputLabel htmlFor="password">Пароль</InputLabel>
                {!errors.password && watchPasswordField && <CheckIcon data-test-id='checkmark' />}
                {watchPasswordField && <InputIcon data-test-id={isVisiblePassword ? 'eye-opened' : 'eye-closed'} className={isVisiblePassword ? 'visible' : 'hidden'} onClick={() => setIsVisiblePassword(!isVisiblePassword)} type='button' />}
              </InputWrapper>
            </FormWrapper>
            {errors?.password?.type === 'required' && isBlurPassword
              ? <TextHelperError data-test-id='hint'><span>{errors.password?.message}</span></TextHelperError>
              : (
                <TextHelper data-test-id='hint' className={isBlurPassword && errors.password ? 'active' : ''}> Пароль <ErrorHighlight className={errorsPassword.includes('не менее 8 символов') && watchPasswordField ? 'active' : ''}>не менее 8 символов</ErrorHighlight>, с <ErrorHighlight className={errorsPassword.includes('заглавной буквой') && watchPasswordField ? 'active' : ''}>заглавной буквой</ErrorHighlight> и <ErrorHighlight className={errorsPassword.includes('цифрой') && watchPasswordField ? 'active' : ''}>цифрой</ErrorHighlight> </TextHelper>
              )}
          </React.Fragment >
        );
      case 2:
        return (
          <React.Fragment>
            <FormWrapper className={errors.firstName ? 'error' : ''}>
              <InputWrapper>
                <Input id="firstName" placeholder=" " {...register('firstName')} type='text' autoComplete="off" name='firstName' />
                <InputLabel htmlFor="firstName">Имя</InputLabel>
              </InputWrapper>
            </FormWrapper>
            {errors?.firstName && <TextHelperError data-test-id='hint'><span>{errors.firstName?.message}</span></TextHelperError>}
            <FormWrapper className={errors.lastName ? 'error' : ''}>
              <InputWrapper>
                <Input id="lastName" placeholder=" " {...register('lastName')} type='text' autoComplete="off" name='lastName' />
                <InputLabel htmlFor="lastName">Фамилия</InputLabel>
              </InputWrapper>
            </FormWrapper>
            {errors?.lastName && <TextHelperError data-test-id='hint'><span>{errors.lastName?.message}</span></TextHelperError>}
          </React.Fragment >
        );
      case 3:
        return (
          <React.Fragment>
            <FormWrapper className={errors.phone ? 'error' : ''}>
              <InputWrapper>
                <InputPhone id="phone" placeholder=" " {...register('phone')} type='phone' autoComplete="off" name='phone' mask='+375 (99) 999-99-99'
                  maskChar='x'
                  onFocus={() => setIsFocusPhone(true)}
                  onBlur={() => setIsFocusPhone(false)} />
                <InputLabel htmlFor="phone">Номер телефона</InputLabel>
              </InputWrapper>
            </FormWrapper>
            {errors.phone && <TextHelperError data-test-id='hint'><span>{errors.phone?.message}</span></TextHelperError>}
            {isFocusPhone && <TextHelper data-test-id='hint'>В формате +375 (xx) xxx-xx-xx</TextHelper>}
            <FormWrapper className={errors.email ? 'error' : ''}>
              <InputWrapper>
                <Input id="email" placeholder=" " {...register('email')} autoComplete="off" name='email' />
                <InputLabel htmlFor="email">E-mail</InputLabel>
              </InputWrapper>
            </FormWrapper>
            {errors?.email && <TextHelperError data-test-id='hint'><span>{errors.email?.message}</span></TextHelperError>}
          </React.Fragment >
        );
      default:
        return null;
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>
      {isLoading
        ? <Loader />
        : isSuccess || isErrors
          ? < InfoPopup data-test-id='status-block' title={title} text={text} buttonText={buttonText} handlerClick={handler} />
          : <> <FormTitle>Регистрация</FormTitle>
            <StepsInfo>{step} шаг из 3</StepsInfo>
            {content()}
            <FormButton
              className={isEmptyErrors ? 'step' : 'dis'}
              disabled={!isEmptyErrors}>
              {step === 1 ? 'следующий шаг' : step === 2 ? 'последний шаг' : 'зарегистрироваться'}
            </FormButton>
            <BoxInfo>
              <TextHelp>Есть учётная запись?</TextHelp>
              <Button className='authorization' onClick={() => navigate('/auth')}>Войти</Button>
            </BoxInfo>
          </>}
    </Form>
  )
};
