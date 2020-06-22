import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: 'product sans', 'roboto';
        font-size: 5vh;
        height: 100vh;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;