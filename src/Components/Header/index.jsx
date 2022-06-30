import { RiShutDownLine } from "react-icons/ri";

import { Container, Logout, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/joanderson337.png" alt="goto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Joanderson Silva</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
