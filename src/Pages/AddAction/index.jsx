import { Container, Form, FormGroup, Label, Input, TextArea, SubmitButton } from "./styles"; 
import { useNavigate } from "react-router-dom";
import { Header } from "../../Componets/Header"
import { api } from "../../services/api";
import { useState } from "react";

export function AddAction() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    responsible: "",
    description: "",
    location: "",
    contact: "",
    link: ""
  });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/actions", formData);
      alert("Ação cadastrada com sucesso!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar ação!");
    }
  }

  return (
    <Container>
      <Header/>

      <main>
        <h1>Cadastrar ação</h1>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome da ação</Label>
            <Input name="title" type="text" placeholder="AjudaMaria.exemplo" value={formData.title} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>Nome do responsável</Label>
            <Input name="responsible" placeholder="Maria.exemplo" value={formData.responsible} onChange={handleChange} />
          </FormGroup>

          <FormGroup className="textarea">
            <Label>Descrição</Label>
            <TextArea name="description" placeholder="Descrição breve" value={formData.description} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>Localização</Label> 
            <Input name="location" type="text" placeholder="cidade.exemplo" value={formData.location} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>Contato</Label> 
            <Input name="contact" type="text" placeholder="(00)00000-0000 ou email" value={formData.contact} onChange={handleChange} />
          </FormGroup>

          <FormGroup className="link">
            <Label>Link para doações</Label>
            <Input name="link" type="text" placeholder="https://exemplo.com/doar" value={formData.link} onChange={handleChange} />
            <span>Se a ação aceitar doações via pix ou outro meio, insira o link/código.</span>
          </FormGroup>

          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </Form>
      </main>
    </Container>
  );
}
