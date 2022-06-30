import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tag";
import { Container, Content, Links } from "./style";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            vero tempora reprehenderit accusantium labore odit temporibus dolore
            blanditiis ducimus harum? Voluptatum odit unde illo numquam,
            exercitationem quasi eligendi alias labore?
          </p>

          <Section title="Link úteis">
            <Links>
              <li>
                <a href="#">www.google.com.br</a>
              </li>
              <li>
                <a href="#">www.google.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="teste12" />
        </Content>
      </main>
    </Container>
  );
}
