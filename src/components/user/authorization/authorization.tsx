import { useEffect, useState } from 'react';

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Loader } from '../../loader/loader';
import { InfoPopup } from '../info-popup/info-popup';

import { IError, IPayloadAuth, useAuthUserMutation } from '../../../store/books-info-api';
import { getLoginToken } from '../../../utils/get-token';

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
import { UpdateButton } from './authorization.styled';
import { TextHelperError } from '../forgot-password/forgot-password.styled';

export interface IStatusError {
  status: number;
  name: string;
  message: string;
  details: object
}

export const Authorization = () => {

  const schema = yup.object().shape({
    identifier: yup.string()
      .required('Поле не может быть пустым')
    ,
    password: yup.string()
      .required('Поле не может быть пустым')
  })


  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: 'all',
    defaultValues: {
      identifier: '',
      password: '',
    },
    criteriaMode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const token = getLoginToken();

  const navigate = useNavigate();

  const [authUser, { isLoading, error }] = useAuthUserMutation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const { status } = error as IStatusError || {};

  const watchPasswordField = watch('password');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  function onSubmit(data: IPayloadAuth) {
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

  const handler = () => {
    handleSubmit(onSubmit)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
      {isLoading && <Loader />}
      {error && status !== 400
        ? <InfoPopup data-test-id='status-block' title='Вход не выполнен' text='Что-то пошло не так. Попробуйте еще раз' buttonText='Повторить' handlerClick={handler} />
        : (<><FormTitle>Bход в личный кабинет</FormTitle>
          <FormWrapper className={errors.identifier ? 'error' : ''}>
            <InputWrapper>
              <Input {...register('identifier')} id="identifier" placeholder=" " />
              <InputLabel htmlFor="identifier">Логин</InputLabel>
            </InputWrapper>
          </FormWrapper>
          {errors?.identifier && <TextHelperError data-test-id='hint'><span>{errors?.identifier?.message}</span></TextHelperError>}
          <FormWrapper className={errors.password ? 'error' : ''}>
            <InputWrapper>
              <Input {...register('password')} type={isVisiblePassword ? 'text' : 'password'} id="password" placeholder=" " />
              <InputLabel htmlFor="password">Пароль</InputLabel>
              {watchPasswordField && <InputIcon data-test-id={isVisiblePassword ? 'eye-opened' : 'eye-closed'} className={isVisiblePassword ? 'visible' : 'hidden'} onClick={() => setIsVisiblePassword(!isVisiblePassword)} type='button' />}
            </InputWrapper>
          </FormWrapper>
          {errors?.password && <TextHelperError data-test-id='hint'><span>{errors?.password?.message}</span></TextHelperError>}
          {status === 400 && <TextHelperError data-test-id='hint'><span>Неверный логин или пароль!</span></TextHelperError>}
          <UpdateButton onClick={() => navigate('/forgot-pass')}>{status === 400 ? 'Восстановить?' : 'Забыли логин или пароль?'}</UpdateButton>
          <FormButton>Вход</FormButton>
          <BoxInfo>
            <TextHelp>Нет учётной записи?</TextHelp>
            <Button onClick={() => handlerClick()}>Регистрация</Button>
          </BoxInfo></>)}
    </Form>
  )
};
