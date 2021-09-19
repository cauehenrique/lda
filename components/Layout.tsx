import Navigation from "~/components/Navigation";

import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navigation />
      <div className="max-w-2xl mx-auto mt-14 p-4">{children}</div>
    </div>
  );
};

export default Layout;
