import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
   height: 100%;
  width: 100%;
  position: fixed;
  top: 0; 
  left: 0;
  background: rgba(54, 54, 54, 0.5);
  backdrop-filter: blur(10px); 
  z-index: 9999999;
`;

export const Spinner = styled.span`
  width: 69px;
  height: 69px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
    @media screen and (max-width: 770px) {
    width: 44px;
    height: 44px;
   }
    @media screen and (max-width: 330px) {
    width: 22px;
    height: 22px;
   }
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`;
