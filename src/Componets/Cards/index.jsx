import { Container } from "./styles";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Cards({ title, location, description, responsible, email, link }) {
  const navigate = useNavigate();

  function handleDetails() {
    navigate("/details", {
      state: {
        title,
        location,
        description,
        responsible,
        email,
        link
      }
    });
  }

  return (
    <Container>
      <div className="icon">
        
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>
          <CiLocationOn /> {location}
        </p>
        <p className="description">
          <MdOutlineDescription /> {description}
        </p>
      </div>
      <button onClick={handleDetails}>Ver detalhes</button>
    </Container>
  );
}
