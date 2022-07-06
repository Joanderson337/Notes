import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom"

import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Avatar, Container, Form } from "./style";

export function Profile(){
  return(
    <Container>
      <header>
        <Link to ="/">
        <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/Joanderson337.png" alt="foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
            />
          </label>

        </Avatar>
      
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

      <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

      <Input 
          placeholder="senha atual"
          type="password"
          icon={FiLock}
        />

      <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

      <Button title="Salva" />  
        
      </Form>

    </Container>


  )
}

