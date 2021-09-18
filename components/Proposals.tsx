import Proposal from "~/components/Proposal";

import { IProposal } from "~/interfaces/response";
import { FC } from "react";

interface IProposals {
  proposals: IProposal[];
}

const Proposals: FC<IProposals> = ({ proposals }) => {
  return (
    <div className="flex flex-col space-y-2">
      {proposals.map((item) => (
        <Proposal
          key={item.id}
          id={item.id}
          title={item.titulo}
          content={item.conteudo}
          score={item.score}
        />
      ))}
    </div>
  );
};

export default Proposals;
