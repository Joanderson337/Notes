import { Link } from "react-router-dom"

import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Textarea } from "../../Components/Textarea";
import { Container, Form } from "./style";

export function New() {
  return (
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar notas</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Titulo" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">

            <NoteItem value="www.google.com" />
            <NoteItem isNew placeholder="Novo link" />

          </Section>



          <Section title="Marcadores">
            <div className='tags'>

              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />

            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>

    </Container>
  )
}