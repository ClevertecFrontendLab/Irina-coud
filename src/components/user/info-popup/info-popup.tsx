import { Popup, PopupButton, PopupText, PopupTitle } from "./info-popup.styled";

export interface IPropsInfoPopup {
  title: string,
  text: string,
  buttonText?: string,
  handlerClick?: () => void,
  isNotButton?: boolean
}

export const InfoPopup = ({ title, text, buttonText, handlerClick = () => { }, isNotButton }: IPropsInfoPopup) => (
  <Popup data-test-id='status-block'>
    <PopupTitle>{title}</PopupTitle>
    <PopupText>{text}</PopupText>
    {isNotButton ? '' : <PopupButton onClick={handlerClick}>{buttonText}</PopupButton>}
  </Popup>
);
