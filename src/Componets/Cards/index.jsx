import { Container } from "./styles";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // IMPORT CORRETO

export function Cards({ id, title, location, description, responsible, contact, link }) {
  const navigate = useNavigate();

  function handleDetails() {
    navigate("/details", {
      state: {
        title,
        location,
        description,
        responsible,
        email: contact,
        link
      }
    });
  }

  return (
    <Container>
      <div className="info">
        <h2>{title}</h2>
        <p>
          <CiLocationOn /> {location}
        </p>
        <p><strong>Responsável:</strong> {responsible}</p>
        <p className="description">
          <MdOutlineDescription /> {description}
        </p>
      </div>
      <button onClick={handleDetails}>Ver detalhes</button>
    </Container>
  );
}
