import {Container, Form, FormGroup, Label, Input, TextArea, SubmitButton} from "./styles"; 
import { useNavigate } from "react-router-dom";
import { Header } from "../../Componets/Header"


export function AddAction() {
  const navigate = useNavigate();

  function handleClick() {
    alert("Ação cadastrada com sucesso!")
    navigate("/");
  }


  return (
    <Container>
      <Header/>

      <main>
        <h1>Cadastrar ação</h1>

        <Form>
          <FormGroup>
            <Label>Nome da ação</Label>
            <Input type="text" placeholder="AjudaMaria.exemplo" />
          </FormGroup>

        
          <FormGroup>
            <Label>Nome do responsával</Label>
            <Input placeholder="Maria.exemplo"  />
          </FormGroup>

          <FormGroup className="textarea">
            <Label>Descrição</Label>
            <TextArea placeholder="Descrição breve"  />
          </FormGroup>

          <FormGroup>
            <Label>Localização  </Label> 
            <Input type="text" placeholder="cidade.exemplo" />
          </FormGroup>

          <FormGroup>
            <Label>Contato </Label> 
            <Input type="number" placeholder="(00).00000000" />
          </FormGroup>

          <FormGroup className="link">
            <Label>Link para doações</Label>
            <Input type="text" placeholder="https://exemplo.com/doar" className="link"/>
            <span>
              se a ação social aceitar doações via pix, insira o código pix, ou outro meio de contribuição.
            </span>
          </FormGroup>

          <SubmitButton type="submit" onClick={handleClick}>Cadastrar</SubmitButton>
        </Form>
      </main>
    </Container>
  );
}