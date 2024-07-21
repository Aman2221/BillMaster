import { useMyContext } from "@/context/my-context";
import React, { ReactNode } from "react";

const MainSection = ({ children }: { children: ReactNode }) => {
  const { showSidebar } = useMyContext();

  return (
    <div
      className={`${
        showSidebar ? "ml-80" : "ml-0"
      } flex flex-col px-6 transistion-500ms`}
    >
      {children}
    </div>
  );
};

export default MainSection;
