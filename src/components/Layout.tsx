import React, { FC, useEffect } from "react";
import Header from "./Header";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
