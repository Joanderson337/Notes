import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText isActive title="teste" />
        </li>
        <li>
          <ButtonText isActive title="teste" />
        </li>
        <li>
          <ButtonText isActive title="teste" />
        </li>
      </Menu>

      <Search></Search>

      <Content></Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
