import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans', sans-serif;
    }

    :root {
        --boxShadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.shadow};
    }

    body {
        background: ${({ theme }) => theme.colors.background};
    }
`;
