import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #FFFFFF;
    --red: #E52E4D;
    --green: #33cc95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {  
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 1080px) {
      font-size: 93.75px; // 15px
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);

  position: fixed; 
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .react-modal-content {
    max-width: 576px;
    width: 100%;

    background: var(--background);
    padding: 3rem;
    position: relative;
    
    border-radius: 0.4rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
