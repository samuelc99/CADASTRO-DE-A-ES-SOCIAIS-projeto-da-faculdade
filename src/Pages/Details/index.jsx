import { Container } from "./styles";
import { Header } from "../../Componets/Header";
import { useLocation } from "react-router-dom";

export function Details() {
  const location = useLocation();
  const {
    title,
    description,
    location: city,
    responsible,
    contact,
    link
  } = location.state || {};

  return (
    <Container>
      <Header />
      <div className="content">
        <h1>{title || "Título não disponível"}</h1>
        <div className="info">
          <p><strong>📝 Descrição:</strong> {description}</p>
          <p><strong>📍 Localização:</strong> {city}</p>
          <p><strong>👤 Responsável:</strong> {responsible}</p>
          <p><strong>📧 Contato:</strong> {contact}</p>
          <p>
            <strong>💻 Link para doações:</strong>{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </p>
        </div>
      </div>
    </Container>
  );
}
