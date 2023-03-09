
import { IPayloadAuth, IPayloadRegister, IResponseAuth } from "../../../store/books-info-api";
import { Popup, PopupButton, PopupText, PopupTitle } from "./info-popup.styled";


export interface IPropsInfoPopup {
  title: string,
  text: string,
  buttonText?: string,
  handler?: (data?: IPayloadAuth | IPayloadRegister) => void | undefined;
  isNotButton?: boolean
}

export const InfoPopup = ({ title, text, buttonText, handler, isNotButton }: IPropsInfoPopup) => (
  <Popup data-test-id='status-block'>
    <PopupTitle>{title}</PopupTitle>
    <PopupText>{text}</PopupText>
    {isNotButton ? '' : <PopupButton onClick={() => {
      if (handler) {
        handler()
      }
    }}>{buttonText}</PopupButton>}
  </Popup>
);
