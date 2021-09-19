import Head from "next/head";

import Layout from "~/components/Layout";
import ProposalCreator from "~/components/ProposalCreator";
import Proposals from "~/components/Proposals";

import { IProposalsResponse } from "~/interfaces/response";
import { GetServerSideProps } from "next";
import { FC } from "react";

import api from "~/services/api";

interface IMainPage {
  contentList: IProposalsResponse;
}

export const getServerSideProps: GetServerSideProps<IMainPage> = async () => {
  const { data: contentList } = await api.get("/propostas/listar");

  return {
    props: {
      contentList,
    },
  };
};

const MainPage: FC<IMainPage> = ({ contentList }) => {
  return (
    <Layout>
      <Head>
        <title>Página Inicial - Luz do Avanço</title>
        <meta
          name="description"
          content="Somos um grupo de estudantes apaixonados por liberdade!"
        />
      </Head>
      <ProposalCreator />
      <Proposals proposals={contentList.rows} />
    </Layout>
  );
};

export default MainPage;
