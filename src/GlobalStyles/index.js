import { createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  li:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
  }

  .input {
      background-color: ${({ theme }) => theme.searchBar}
  }
`

export { GlobalStyles };