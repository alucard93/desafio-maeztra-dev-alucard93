import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration:none;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
    }

    .newsletter-btn,
    .container-user-mid-header {
        cursor: pointer;
    }
`
