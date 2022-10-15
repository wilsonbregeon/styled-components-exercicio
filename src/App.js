import React from "react";
import  {Header} from "./Componentes/Header";
import { Main } from "./Componentes/Main";
import { Nav } from "./Componentes/Nav";
import { Section } from "./Componentes/Section";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
      <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
      </Header>

        <Main>
          <Nav>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </Nav>

          <Section>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </Section>
        </Main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
