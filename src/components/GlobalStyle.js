import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
            border-radius: 2rem;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        padding: 2rem 0 0 ;
    }

    h1{
        font-size: 2.5rem;

    }
    

    h2 {
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
        font-size: 2rem;

    }

    h3 {
        font-size: 1rem;
        color: #333;
        padding: 1.5rem 0.5rem 0.5rem 0.5rem;

    }

    p {
        font-size: 0.8rem;
        line-height: 200%;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;

    }

    img {
        display: block;
    }

    input {
        font-family: 'Montserrat', sans-serif;
    }

    footer {
        padding: 5rem 0 1rem 0;
        text-align: center;
    }

`;

export default GlobalStyles;
