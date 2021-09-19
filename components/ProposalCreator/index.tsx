import { HandIcon } from "@heroicons/react/outline";
import { FC } from "react";

import { Container, Area, SubmitContainer, SubmitButton } from "./styles";

const ProposalCreator: FC = () => {
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Area placeholder="Qual a sua ideia?"></Area>
      <SubmitButton type="submit">
        <HandIcon className="block w-5 h-5" />
      </SubmitButton>
    </Container>
  );
};

export default ProposalCreator;
