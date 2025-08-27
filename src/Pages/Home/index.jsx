import { Container } from "./styles";
import { Header } from "../../Componets/Header";
import { Cards } from "../../Componets/Cards";
import { useState } from "react";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const actions = [
    { id: 1,
    title: "Campanha de Doação",
    location: "São Paulo",
    description: `Estamos promovendo uma campanha solidária para arrecadar alimentos não perecíveis, 
    roupas e produtos de higiene. O objetivo é apoiar famílias em situação de vulnerabilidade, 
    levando mais dignidade e conforto para quem mais precisa. Toda contribuição faz a diferença!`,
    responsible: "Maria Oliveira",
    email: "(11)99999 9999",
    link: "https://exemplo.com/doar" },


    {id: 2,
    title: "Mutirão de Limpeza",
    location: "Curitiba",
    description: `Essa ação visa reunir voluntários para limpar ruas, praças e espaços públicos da comunidade. 
    Além de melhorar o ambiente urbano, o mutirão fortalece o senso de responsabilidade coletiva e incentiva 
    o cuidado com o local onde vivemos.`,
    responsible: "João Silva",
    email: "joao@exemplo.com",
    link: "https://exemplo.com/limpeza"},


    { id: 3,
    title: "Feira Solidária",
    location: "Curitiba",
    description: `A Feira Solidária é um evento comunitário que reúne doações de roupas, artesanatos e alimentos 
    para serem vendidos a preços simbólicos. Toda a renda arrecadada é revertida para projetos sociais locais, 
    promovendo solidariedade e apoio mútuo.`,
    responsible: "Pedro Gomes",
    email: "pedro@exemplo.com",
    link: "https://exemplo.com/feira"},


    { id: 4,
    title: "Reforço Escolar",
    location: "Ponta Grossa",
    description: `O projeto oferece aulas de reforço escolar gratuitas para crianças e adolescentes
     com dificuldades na aprendizagem. Com a ajuda de voluntários, buscamos garantir o direito à 
     educação de qualidade e contribuir para o desenvolvimento acadêmico dos alunos.`,
    responsible: "Eduarda dos santos",
    email: "eduarda@exemplo.com",
    link: "https://exemplo.com/reforço" },
  ];
  
  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header setSearchTerm={setSearchTerm} />

      <main>
        {filteredActions.map(action => (
          <Cards
           key={action.id}
          title={action.title}
          location={action.location}
          description={action.description}
          responsible={action.responsible}
          email={action.email}
          link={action.link}
          />
        ))}
        {filteredActions.length === 0 && (
          <p className="notAction">
            Nenhuma ação encontrada
          </p>
        )}
      </main>
    </Container>
  );
}
