import {
  ErrorIconClose,
  ErrorMessage,
  ErrorWrapper
} from "./error.styled";

export const ErrorPopup = () => (
  <ErrorWrapper data-test-id='error'>
    <ErrorMessage > Что - то пошло не так.Обновите страницу через некоторое время.</ErrorMessage >
    <ErrorIconClose />
  </ErrorWrapper >
);
