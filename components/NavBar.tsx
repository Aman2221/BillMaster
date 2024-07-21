import React, { useState } from "react";
import Avatar from "./Avatar";
import FullscreenButton from "./FullScreenBtn";
import UserDropDown from "./DropDowns/UserDropDown";
import Image from "next/image";
import { useMyContext } from "@/context/my-context";

const NavBar = () => {
  const [userMenu, setShowUserMenu] = useState(false);
  const [langMenu, setShowLangMenu] = useState(false);
  const { showSidebar, setShowSidebar } = useMyContext();

  const [selectedLang, setSelectedLang] = useState({
    imrURL: "/flags/us.svg",
    name: "english",
  });

  const handleLang = (item: { imrURL: string; name: string }) => {
    setSelectedLang(item);
    setShowLangMenu(!langMenu);
  };

  return (
    <div
      className={`flex justify-between items-start py-3 w-full transistion-500ms`}
    >
      <i
        onClick={() => setShowSidebar(!showSidebar)}
        className="bx bx-menu-alt-left text-white text-2xl cursor-pointer"
      ></i>
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6 rounded-md"
            src={selectedLang.imrURL}
            alt="country flag"
            onClick={() => setShowLangMenu(!langMenu)}
          />
          <UserDropDown
            show={langMenu}
            langMenu={true}
            handleClick={handleLang}
          />
        </div>

        <FullscreenButton />
        <i className="bx bx-moon text-white text-2xl cursor-pointer"></i>

        <div className="relative">
          <div className="notification-count rounded-full bg-red-400 flex-center text-xs w-4 h-4 absolute right-0">
            2
          </div>
          <i className="bx bx-bell text-white text-2xl cursor-pointer"></i>
        </div>

        <div className="flex flex-col relative">
          <div
            onClick={() => setShowUserMenu(!userMenu)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Avatar />
            <span className="dm-sans">User name</span>
            <i
              className={`bx bx-chevron-down
              } text-lg font-bold`}
            ></i>
          </div>
          <UserDropDown show={userMenu} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
