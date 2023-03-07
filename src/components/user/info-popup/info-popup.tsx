
import { Popup, PopupButton, PopupText, PopupTitle } from "./info-popup.styled";


export interface IPropsInfoPopup {
  title: string,
  text: string,
  buttonText: string,
  handler: () => void;
}

export const InfoPopup = ({ title, text, buttonText, handler }: IPropsInfoPopup) => (
  <Popup data-test-id='status-block'>
    <PopupTitle>{title}</PopupTitle>
    <PopupText>{text}</PopupText>
    <PopupButton onClick={() => handler()}>{buttonText}</PopupButton>
  </Popup>
);
