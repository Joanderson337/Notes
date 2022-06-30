import { Container } from "./style";

export function Button({ title, logading = false, ...rest  }) {
 return(
    <Container type="button" disabled ={logading}>
      {logading ? 'carregando' : title}
    </Container>
 )
}
