//Layout Page
import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./sidebar";

const Layout = ({ children, title }) => {
  return (
    <Sidebar>
      <div className="pl-0 pt-16 pr-4 pb-4 bg-white min-h-screen">
        <TopBar title={title} />
        <div className="mt-4">{children}</div>
      </div>
    </Sidebar>
  );
};

export default Layout;
