import styled from "styled-components";

import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
 }

 html, border-style, #root {
     max-height: 100vh;
     max-width: 100vw;
 }

 *, button, input{
     border: 0;
     background: none;
     color: var(--white);
     font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

 html{
     background: var(--primary);
 }

 :root{
    :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #916BEA;
    --twitter-dark-hover: #171701; 
    --twitter-light-hover: #2C8ED6;
  }
 }
 
 `;
  
