import Photo from "~/components/Photo";
import { Container, Title, Subtitle, UsersContainer, Anchor } from "./styles";

import caue from "~/public/images/caue.png";
import dalton from "~/public/images/dalton.png";
import daniel from "~/public/images/daniel.png";
import gabriel from "~/public/images/gabriel.png";
import jp from "~/public/images/jp.png";
import julia from "~/public/images/julia.png";
import lara from "~/public/images/lara.png";
import luis from "~/public/images/luis.png";
import samuel from "~/public/images/samuel.png";
import vinicios from "~/public/images/vinicios.png";

import { FC } from "react";

const About: FC = () => {
  return (
    <Container>
      <Title>Quem somos nós?</Title>
      <Subtitle>
        Montamos nosso grupo durante a pandemia do COVID-19. Com a vontade de
        transformar a&nbsp;
        <Anchor href="https://eteczonaleste.com.br/" target="_blank">
          ETEC Zona Leste
        </Anchor>
        &nbsp;em um lugar melhor, nós propusemos a construir o grupo Luz do
        Avanço.
      </Subtitle>
      <UsersContainer>
        <Photo image={caue} name="Cauê" />
        <Photo image={dalton} name="Dalton" />
        <Photo image={daniel} name="Daniel" />
        <Photo image={gabriel} name="Gabriel" />
        <Photo image={jp} name="João Pedro" />
        <Photo image={julia} name="Julia" />
        <Photo image={lara} name="Lara" />
        <Photo image={luis} name="Luis" />
        <Photo image={samuel} name="Samuel" />
        <Photo image={vinicios} name="Vinicios" />
      </UsersContainer>
    </Container>
  );
};

export default About;
