// context/MyContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

interface MyContextProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");
  return (
    <MyContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        theme,
        setTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
