import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    justify-content: center;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #363636;
    letter-spacing: 0.1px;
    padding: 31px 0px 0 0px;
      @media screen and (max-width: 330px) {
          padding: 24px 0px 0 0px;
      }
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  ul li {
    list-style: none;
  }

  ol {
    list-style: none;
    counter-reset: li;
  }

  ol>li:before {
    counter-increment: li;
    content: counters(li, ".") ". ";
  }

  a,
  a:visited,
   a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea {
    font-family: inherit;
    outline: none;
  }`;
