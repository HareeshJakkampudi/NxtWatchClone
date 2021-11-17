import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    position:relative;
    font-family:'Roboto';
    overflow:hidden;
    ${
      '' /* @media (prefers-color-scheme:dark){
        background-color:#000;
        color:#fff;
    } */
    }
}

`
