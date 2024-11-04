import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --primary-color: #f7931a;
        //--background-color: #1f1f1f;
        --text-color: #ffffff;
        //background-color: #dce9d8;
    }

    body {
        background-color: #dce9d8;
        color: black;
        justify-content: center;
    }
`;

export default GlobalStyle;
