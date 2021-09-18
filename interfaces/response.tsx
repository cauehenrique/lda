export interface IProposalsResponse {
  rows: IProposal[];
  totalPages: number;
}

export interface IProposal {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  score: number;
  createdAt: string;
  updatedAt: string;
}
