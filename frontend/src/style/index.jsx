import { createGlobalStyle } from 'styled-components'


export const theme = {
    colorPrimaryOrange: "#E47D31",
    colorPrimaryGrey: "#D8D8D8",
    colorPrimaryBackgroundLightGrey: "#F2F2F2",
    colorPrimaryBackgroundWhite: "#FFFFFF",
    colorButtonGrey: "rgba(145, 145, 145, 0.6)",
    colorIconGrey: "#979797",
    colorTitleBlack: "#4C4C4C",
    colorTextBlack: "#000000",
    colorTextWhite: "#ffffff",
    colorInputFieldFocusBackground: "#FCF2EA",
}

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%; /* 1.6 rem = 16px*/
    }
    
    * {
        margin: 0;
        padding: 0;
        color: ${theme.colorTitleBlack};
        box-sizing: border-box;
        font-size: 1.6rem;
        cursor: default;
    }

    **,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-weight: 400;
        line-height: 1.6;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        color: ${theme.colorPrimaryBackgroundLightGrey};
    }

    p {
        line-height: 2.6rem;
        font-size: 1.6rem;
        color: ${theme.colorTitleBlack};
    }

    html {
        font-size: 100%;
        font-family: Helvetica, sans-serif;
        font-weight: 400;
        
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }

    html::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
`;
