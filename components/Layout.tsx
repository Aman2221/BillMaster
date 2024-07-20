"use client";
import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { MyProvider } from "@/context/my-context";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <MyProvider>
        <>
          <Sidebar />
          <NavBar />
          {children}
        </>
      </MyProvider>
    </div>
  );
};

export default Layout;
