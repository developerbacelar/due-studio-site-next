import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #F7F7F7;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`

export default Reset;