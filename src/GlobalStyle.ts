import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * , ::before , ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  :root {
    // Colors
    --grey-900: #2A4144;
    --grey-500: #86A2A5;
    --white: #FFFFFF;
    --green-600:#0C7D69;
    --green-200: #E0F1E8; 
    --red: #D73C3C; 
    // Font size
    --heading: 3.2rem;
    --body-md: 1.8rem;  
    --body-sm: 1.6rem;
    // Spacing
    --100: 0.8rem;
    --150: 1.2rem;
    --200: 1.6rem;
    --300: 2.4rem;
    --400: 3.2rem;
    --500: 4rem;
    --1600: 12.6rem;       
  }
  body {
    background-color: var(--green-200);
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;
