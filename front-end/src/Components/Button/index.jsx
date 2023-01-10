import { Container } from "./style";

export function Button({ title, logading = false, ...rest  }) {
 return(
    <Container type="button" disabled ={logading} {...rest} >
      {logading ? 'carregando' : title}
    </Container>
 )
}
