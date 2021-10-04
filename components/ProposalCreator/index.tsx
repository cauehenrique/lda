import { FC, useState } from "react";

import {
  Container,
  Area,
  SubmitButton,
  ModalContainer,
  ModalContent,
  Input,
  RMInput,
  ModalButton,
  FloatingLabel,
} from "./styles";

import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import api from "~/services/api";

interface Post {
  titulo: string;
  conteudo: string;
  autor: string;
}

const ProposalCreator: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<Post>({
    autor: "",
    titulo: "",
    conteudo: "",
  });

  async function submitProposal() {
    const { titulo, conteudo, autor } = post;

    const urlParams = new URLSearchParams({ titulo, conteudo, autor });
    const apiURL = `/propostas/publicar?${urlParams}`;

    console.log(apiURL);

    // await api.get()
    setModalOpen(false);
  }

  return (
    <Container>
      <Area
        placeholder="Qual a sua ideia?"
        maxLength={120}
        onChange={(e) =>
          setPost((prev) => ({ ...prev, conteudo: e.target.value }))
        }
      ></Area>
      <SubmitButton
        onClick={() => setModalOpen(true)}
        disabled={post.conteudo.length <= 0}
      >
        <CheckCircleIcon className="block w-5 h-5" />
      </SubmitButton>

      <ModalContainer $isVisible={modalOpen}>
        <ModalContent>
          <h1 className="text-2xl font-semibold mb-1">Atenção</h1>
          <h2>
            Contamos com seu bom senso na hora de sugerir projetos para a nossa
            escola.
            <br />
            <br />
            Para evitar mensagens indevidas, precisamos do seu RM para
            identificá-lo em nossa base de dados.
          </h2>
          <div className="mt-6 flex flex-col">
            <div className="relative group">
              <FloatingLabel $inputText={post.titulo}>Título</FloatingLabel>
              <Input
                type="text"
                className="mb-3"
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, titulo: e.target.value }))
                }
              />
            </div>

            <div className="relative group">
              <FloatingLabel $inputText={post.autor}>RM</FloatingLabel>
              <RMInput
                type="text"
                maxLength={5}
                onChange={(e) => setPost({ ...post, autor: e.target.value })}
              />
            </div>

            <ModalButton onClick={() => submitProposal()}>
              <CheckCircleIcon className="w-5 h-5" />
            </ModalButton>
          </div>
        </ModalContent>
        <button
          className="block absolute top-8 right-8 text-white p-2 bg-black bg-opacity-50 rounded-full"
          onClick={() => setModalOpen(false)}
        >
          <XIcon className="w-5 h-5" />
        </button>
      </ModalContainer>
    </Container>
  );
};

export default ProposalCreator;
