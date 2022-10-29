import React, { FC, useEffect } from "react";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
