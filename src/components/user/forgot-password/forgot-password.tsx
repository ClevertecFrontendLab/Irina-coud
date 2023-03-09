import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { useForgotPasswordMutation, useResetPasswordMutation } from "../../../store/books-info-api";
import { Loader } from "../../loader/loader";
import { InfoPopup } from "../info-popup/info-popup";
import { TextHelper } from "../registration/registration.styled";

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
} from "../user-form.styled";
import { GoBackBox, TextHelperError } from "./forgot-password.styled";

// export interface IPayloadForgotPassword {
//   email: string,
// }

export interface IMessageError {
  message: string,
}

export interface IDataError {
  status: number,
  data: {
    data: null,
    error: {
      status: number,
      name: string,
      message: string,
      details: object
    }
  }

}


export const ForgotPassword = () => {

  const { register, handleSubmit } = useForm();

  const [forgotPassword, { isLoading, isError, isSuccess, error }] = useForgotPasswordMutation();
  const [resetPassword, { isSuccess: isSuccessReset, isError: isErrorReset }] = useResetPasswordMutation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisiblePasswordConfirmation, setIsVisiblePasswordConfirmation] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const checkLocation = useLocation().search;

  const isForgotPage = pathname.includes('forgot-pass');

  const { data } = error as IDataError || {}
  const { message } = data?.error as IMessageError || {};



  function onSubmit(data: any) {
    if (checkLocation) {
      const code = checkLocation.slice(6);

      const dataInfo = data;

      dataInfo.code = code;
      resetPassword(dataInfo);
    }
    else {
      forgotPassword(data);
    }

  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form' className={isForgotPage ? 'forgot' : ''}>
      {isLoading
        ? <Loader />
        : isSuccess
          ? <InfoPopup title='Письмо выслано' text='Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля' isNotButton={true} />
          : (<React.Fragment>
            <FormTitle>Восстановление</FormTitle>
            <FormWrapper className={isError ? 'error' : ''}>
              <InputWrapper>
                <Input {...register(`${checkLocation ? 'password' : 'email'}`, { required: true })} id={checkLocation ? 'password' : 'email'} type={!checkLocation ? 'text' : isVisiblePassword ? 'text' : 'password'} placeholder=" " />
                <InputLabel htmlFor={checkLocation ? 'password' : 'email'}>{checkLocation ? 'Новый пароль' : 'Email'}</InputLabel>
                {checkLocation && <InputIcon data-test-id={isVisiblePassword ? 'eye-opened' : 'eye-closed'} className={isVisiblePassword ? 'visible' : 'hidden'} onClick={() => setIsVisiblePassword(!isVisiblePassword)} type='button' />}
              </InputWrapper>
            </FormWrapper>
            {error && <TextHelperError><span>{message}</span></TextHelperError>}
            <TextHelper className={error ? 'error' : ''}>{checkLocation ? 'Пароль не менее 8 символов, с заглавной буквой и цифрой' : 'На этот email будет отправлено письмо с инструкциями по восстановлению пароля'}</TextHelper>
            {checkLocation ? (<FormWrapper className={isError ? 'error' : ''}>
              <InputWrapper>
                <Input {...register('passwordConfirmation', { required: true })} id="passwordConfirmation" placeholder=" " type={isVisiblePasswordConfirmation ? 'text' : 'password'} />
                <InputLabel htmlFor="passwordConfirmation">Повторите пароль</InputLabel>
                <InputIcon data-test-id={isVisiblePasswordConfirmation ? 'eye-opened' : 'eye-closed'} className={isVisiblePasswordConfirmation ? 'visible' : 'hidden'} onClick={() => setIsVisiblePasswordConfirmation(!isVisiblePasswordConfirmation)} type='button' />
              </InputWrapper>
            </FormWrapper>) : ''}

            <FormButton> {checkLocation ? 'Сохранить изменения' : 'Восстановить'}</FormButton>
            <BoxInfo>
              <TextHelp>{checkLocation ? 'После сохранения войдите в библиотеку, используя новый пароль' : 'Нет учётной записи?'}</TextHelp>
              {checkLocation ? '' : <Button onClick={() => navigate('/registration')}>Регистрация</Button>}
            </BoxInfo>
          </React.Fragment>)
      }
    </Form >
  )
};