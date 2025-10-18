import { Container } from "./styles";
import { Header } from "../../Componets/Header";
import { Cards } from "../../Componets/Cards";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActions() {
      try {
        const response = await api.get("/actions");
        setActions(response.data);
      } catch (err) {
        console.error("Erro ao buscar ações:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchActions();
  }, []);

  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header setSearchTerm={setSearchTerm} />

      <main>
        {loading && <p>Carregando ações...</p>}
        {!loading && filteredActions.length === 0 && (
          <p className="notAction">Nenhuma ação encontrada</p>
        )}
        {!loading &&
          filteredActions.map(action => (
            <Cards
              key={action.id}
              title={action.title}
              location={action.location}
              description={action.description}
              responsible={action.responsible}
              contact={action.contact}
              link={action.link}
            />
          ))}
      </main>
    </Container>
  );
}
