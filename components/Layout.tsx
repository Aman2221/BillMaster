"use client";
import "react-tooltip/dist/react-tooltip.css";
import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { MyProvider } from "@/context/my-context";
import MainSection from "./MainSection";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MyProvider>
        <>
          <Sidebar />
          <MainSection>
            <NavBar />
            {children}
          </MainSection>
        </>
      </MyProvider>
    </>
  );
};

export default Layout;
