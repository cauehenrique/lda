import Navigation from "~/components/Navigation";
import tw from "tailwind-styled-components";

import { FC } from "react";

const Container = tw.div`
w-full min-h-screen
bg-gray-50 dark:bg-gray-800
`;

const MainContent = tw.div`
max-w-2xl mx-auto
mt-14 p-4
`;

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default Layout;
