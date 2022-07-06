import { FiPlus, FiSearch } from "react-icons/fi";

import { ButtonText } from "../../Components/ButtonText";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Note } from "../../Components/Note";
import { Section } from "../../Components/Section";
import { Brand, Container, Content, Menu, NewNote, Search } from "./style";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText isActive title="Todos" />
        </li>
        <li>
          <ButtonText isActive title="React" />
        </li>
        <li>
          <ButtonText isActive title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Digite sua pesquisa aqui" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">

          <Note data={{
            title: 'React', 
            tags: [
              {id: '1', name: 'React'},
              {id: '2', name: 'Node'},
            ]
            }} />

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
