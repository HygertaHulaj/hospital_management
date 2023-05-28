import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header"
const Layout = ({ children }) => {
  return (
    <div>
           <Header></Header>
      <Sidebar>{children}</Sidebar>
 
    </div>
  );
};

export default Layout;
