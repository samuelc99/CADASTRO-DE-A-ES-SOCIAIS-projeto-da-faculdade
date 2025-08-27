import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { IoSearchCircle } from "react-icons/io5";
import { useState } from "react";

export function Header({ setSearchTerm }) {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  function handleAddAction() {
    navigate("/addAction");
  }

  function handleHome() {
    navigate("/");
    setSearchTerm("");
  }

  function toggleSearch() {
    setShowSearch(!showSearch);
    if (showSearch) setSearchTerm("");
  }

  return (
    <Container>
      <header>
        <h1>Cadastro de ação social</h1>

        {showSearch && (
          <input
            type="text"
            placeholder="Digite para buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search"
          />
        )}

        <nav>
          <a href="#" onClick={handleHome}>Início</a>
          <a href="#" onClick={handleAddAction}>Cadastrar ação</a>
          <a href="#" onClick={toggleSearch}>
            <IoSearchCircle /> Buscar Ações
          </a>
        </nav>
      </header>
    </Container>
  );
}
