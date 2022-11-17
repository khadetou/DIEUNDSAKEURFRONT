import React, { FC, useEffect } from "react";
import Footer from "./footer";
import Header from "./Header";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
