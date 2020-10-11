import { createGlobalStyle } from 'styled-components';

export const heading = (size) => {
  return `
        text-align: center;
        font-weight: bold;
        line-height: 1em;
        font-size: ${size};
        
    `;
};

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `
        h1 {
            ${heading(theme['font-size-xl'])}
        }
        h2 {
            ${heading(theme['font-size-lg'])}
        }
        h3 {
            ${heading(theme['font-size-md'])}
        }
        h4 {
            ${heading(theme['font-size-sm'])}
        }
        body {
            // background: url(https://i.pinimg.com/originals/3b/1a/66/3b1a6603b7e1e5b6c16e9f998ffb0e91.jpg);
            // background-repeat: no-repeat;
            // background-color: rgba(0,0,0,0.95);
            font-family: 'Nunito Sans', sans-serif;
            overflow-x: hidden;
            width: 100vw;
            height: 100vh;
            margin: 0;
            @media ${theme.device.mobileL} { 
                background-size: cover;
            }
        }
    `}
`;
