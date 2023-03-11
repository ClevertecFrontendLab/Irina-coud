import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { useForgotPasswordMutation, useResetPasswordMutation } from "../../../store/books-info-api";
import { Loader } from "../../loader/loader";
import { InfoPopup } from "../info-popup/info-popup";
import { ErrorHighlight, TextHelper } from "../registration/registration.styled";

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
} from "../user-form.styled";
import { TextHelperError } from "./forgot-password.styled";
import { getLoginToken } from "../../../utils/get-token";

export interface IError {
  error: string,
}

export const ForgotPassword = () => {

  const schema1 = yup.object().shape({
    email: yup.string().required('Поле не может быть пустым')
      .matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i, 'Введите корректный e-mail'),
  })

  const schema2 = yup.object().shape({
    password: yup.string()
      .required('Поле не может быть пустым')
      .matches(/[a-zA-Zа-яА-Я\d].{7,}/, 'не менее 8 символов')
      .matches(/[А-ЯA-Z]/, 'заглавной буквой')
      .matches(/[\d]/, 'цифрой'),
    passwordConfirmation: yup.string()
      .required('Поле не может быть пустым')
  })

  const checkLocation = useLocation().search;

  const validationSchema = checkLocation ? schema2 : schema1;

  const { register, formState: { errors }, handleSubmit, watch } = useForm({
    mode: 'all',
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      email: ''
    },
    criteriaMode: 'all',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
    resolver: yupResolver(validationSchema),
  });

  const isEmptyErrors = !Object.keys(errors).length;

  const [isBlurPassword, setIsBlurPassword] = useState(false);
  const [isBlurPasswordConfirmation, setIsBlurPasswordConfirmation] = useState(false);

  const [forgotPassword, { isLoading, isError, isSuccess: isSuccessForgot, error }] = useForgotPasswordMutation();
  const [resetPassword, { isLoading: isLoadingReset, isSuccess: isSuccessReset, isError: isErrorReset, reset }] = useResetPasswordMutation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisiblePasswordConfirmation, setIsVisiblePasswordConfirmation] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const watchPasswordField = watch('password');
  const watchPasswordConfirmation = watch('passwordConfirmation');

  const isPasswordsMatch = watchPasswordField === watchPasswordConfirmation || false;

  const isForgotPage = pathname.includes('forgot-pass');

  // const { error: systemError } = error as IError || {}


  const code = checkLocation.slice(6);

  function onSubmit(data: any) {
    if (checkLocation) {


      const resetData = {
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
        code
      }

      resetPassword(resetData);
    }
    else {
      const forgotData = {
        email: data.email
      }

      forgotPassword(forgotData);
    }
  }

  const errorsPassword = errors?.password?.types?.matches as string || '';

  function handlerSuccessReset() {
    navigate('/auth');
  }

  function handlerErrorReset() {
    reset()
    navigate(`forgot-pass?code=${code}`);
  }

  const handlerSuccess = handlerSuccessReset;
  const handlerError = handlerErrorReset;

  const passwordAttr = register('password');
  const emailAttr = register('email');
  const passwordConfirmationAttr = register('passwordConfirmation');

  const token = getLoginToken();

  const reg = checkLocation ? passwordAttr : emailAttr;

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  console.log(isBlurPassword)
  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id={checkLocation ? 'reset-password-form' : 'send-email-form'} className={isForgotPage && !checkLocation ? 'forgot' : ''}>
      {isLoading || isLoadingReset
        ? <Loader />
        : isSuccessForgot
          ? <InfoPopup data-test-id='status-block' title='Письмо выслано' text='Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля' isNotButton={true} />
          : isErrorReset
            ? <InfoPopup data-test-id='status-block' title='Данные не сохранились' text='Что-то пошло не так. Попробуйте ещё раз' buttonText='Повторить' handler={handlerError} />
            : isSuccessReset
              ? <InfoPopup data-test-id='status-block' title='Новые данные сохранены' text='Зайдите в личный кабинет, используя свои логин и новый пароль' buttonText='Вход' handler={handlerSuccess} />
              : (<React.Fragment>
                <FormTitle>Восстановление</FormTitle>
                <FormWrapper className={errors.email ? 'error' : ''}>
                  <InputWrapper>
                    <Input
                      {...reg}
                      id={checkLocation ? 'password' : 'email'}
                      type={!checkLocation ? 'text' : isVisiblePassword ? 'text' : 'password'}
                      placeholder=" "
                      onFocus={() => {
                        setIsBlurPassword(false)
                      }}
                      onBlur={(event) => {
                        reg.onBlur(event)

                        // if (errors.password?.message) {
                        setIsBlurPassword(true)
                        // }
                      }}
                    />
                    <InputLabel htmlFor={checkLocation ? 'password' : 'email'}>{checkLocation ? 'Новый пароль' : 'Email'}</InputLabel>
                    {/* {!errors?.password && watchPasswordField && <CheckIcon data-test-id='checkmark' />} */}
                    {!errors.password && watchPasswordField && <CheckIcon data-test-id='checkmark' />}
                    {checkLocation && <InputIcon data-test-id={isVisiblePassword ? 'eye-opened' : 'eye-closed'} className={isVisiblePassword ? 'visible' : 'hidden'} onClick={() => setIsVisiblePassword(!isVisiblePassword)} type='button' />}
                  </InputWrapper>
                </FormWrapper>
                {errors?.email ? <TextHelperError data-test-id='hint'><span>{errors?.email?.message}</span></TextHelperError> : error && <TextHelperError data-test-id='hint'><span>error</span></TextHelperError>}
                {errors?.password?.type === 'required' && isBlurPassword
                  ? <TextHelperError data-test-id='hint'><span>{errors.password?.message}</span></TextHelperError>
                  : (checkLocation &&
                    <TextHelper data-test-id='hint' className={isBlurPassword && errors.password ? 'active' : ''}>Пароль <ErrorHighlight className={errorsPassword.includes('не менее 8 символов') ? 'active' : ''}>не менее 8 символов</ErrorHighlight>, с <ErrorHighlight className={errorsPassword.includes('заглавной буквой') ? 'active' : ''}>заглавной буквой</ErrorHighlight> и <ErrorHighlight className={errorsPassword.includes('цифрой') ? 'active' : ''}>цифрой</ErrorHighlight> </TextHelper>
                  )}
                <TextHelper className='forgot' data-test-id='hint'>{!checkLocation && 'На этот email будет отправлено письмо с инструкциями по восстановлению пароля'}</TextHelper>
                {checkLocation && (<FormWrapper className={isError ? 'error' : ''}>
                  <InputWrapper>
                    <Input
                      {...passwordConfirmationAttr}
                      id="passwordConfirmation"
                      placeholder=" "
                      type={isVisiblePasswordConfirmation ? 'text' : 'password'}
                      onFocus={() => {
                        setIsBlurPasswordConfirmation(false)
                      }}
                      onBlur={(event) => {
                        passwordConfirmationAttr.onBlur(event)

                        // if (errors.password?.message) {
                        setIsBlurPasswordConfirmation(true)
                        // }
                      }}
                    />
                    <InputLabel htmlFor="passwordConfirmation">Повторите пароль</InputLabel>

                    <InputIcon data-test-id={isVisiblePasswordConfirmation ? 'eye-opened' : 'eye-closed'} className={isVisiblePasswordConfirmation ? 'visible' : 'hidden'} onClick={() => setIsVisiblePasswordConfirmation(!isVisiblePasswordConfirmation)} type='button' />
                  </InputWrapper>
                </FormWrapper>)}
                {errors?.passwordConfirmation?.type === 'required'
                  ? <TextHelperError data-test-id='hint'><span>{errors.passwordConfirmation?.message}</span></TextHelperError> : !isPasswordsMatch && watchPasswordConfirmation && isBlurPasswordConfirmation && <TextHelperError data-test-id='hint'><span>Пароли не совпадают</span></TextHelperError>}
                <FormButton className={!isPasswordsMatch ? 'dis' : isEmptyErrors ? 'step' : 'dis'}
                  disabled={!isEmptyErrors || !isPasswordsMatch}> {checkLocation ? 'сохранить изменения' : 'восстановить'}</FormButton>
                <BoxInfo>
                  <TextHelp data-test-id='hint'>{checkLocation ? 'После сохранения войдите в библиотеку, используя новый пароль' : 'Нет учётной записи?'}</TextHelp>
                  {checkLocation ? '' : <Button onClick={() => navigate('/registration')}>Регистрация</Button>}
                </BoxInfo>
              </React.Fragment>)
      }
    </Form >
  )
};