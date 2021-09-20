import { FC, useState } from "react";

import {
  Container,
  Area,
  SubmitButton,
  ModalContainer,
  ModalContent,
  RMInput,
  ModalButton,
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
  const [post, setPost] = useState<Post>();

  async function submitProposal() {
    const apiURL = `/propostas/publicar?titulo=${post.titulo}&conteudo=${post.conteudo}&autor=${post.autor}`;
    // await api.get()
    setModalOpen(false);
  }

  return (
    <Container>
      <Area placeholder="Qual a sua ideia?" maxLength={120}></Area>
      <SubmitButton onClick={() => setModalOpen(true)}>
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
            <span className="w-min block font-semibold bg-white dark:bg-gray-800 px-0.5 ml-2 -mb-3 z-10">
              RM
            </span>
            <RMInput
              type="text"
              placeholder="00000"
              maxLength={5}
              onChange={(e) => setPost({ ...post, autor: e.target.value })}
            />
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
