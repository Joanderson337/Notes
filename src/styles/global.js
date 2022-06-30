import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
}

body, input, button, textarea{
  font-family: 'Roboto Slab', serif;
  outline: none;
}

img{
  max-width: 100%;
  display: block;
}

html{
  font-size: 62.5%;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
 filter: brightness(0.9);
}

a{
  text-decoration: none;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  -webkit-font-smoothing: antialiased;
}
`