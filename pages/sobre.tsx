import Head from "next/head";
import Layout from "~/components/Layout";

import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Sobre Nós - Grêmio Luz do Avanço</title>
        <meta
          name="description"
          content="Somos um grupo de estudantes apaixonados por liberdade!"
        />
      </Head>
      Página Sobre
    </Layout>
  );
};

export default AboutPage;
