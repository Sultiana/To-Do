import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
