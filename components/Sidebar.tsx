import Image from "next/image";
import React, { useState } from "react";
import data from "@/json/index.json";
import SidebarMenu from "@/common/SidebarMenu";
import Link from "next/link";
import { useMyContext } from "@/context/my-context";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useMyContext();
  const [showSubMenu, setShowSubMenu] = useState("");

  const handleSubmenu = (name: string) => {
    setShowSubMenu(name);
  };

  return (
    <div
      className={`${
        showSidebar ? "left-0" : "-left-72"
      } w-72 h-dvh fixed bg-red-900 dark:bg-slate-900 dm-sans transistion-500ms`}
    >
      <div className="logo flex-center">
        <Image
          width={150}
          height={150}
          className=" object-contain"
          src="/logo/logo-white.png"
          alt="country flag"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
      <div className="pt-6 relative">
        <span className="font-semibold uppercase text-sm text-gray-400 px-3 ">
          Menu
        </span>
        <Link href="/dashboard" className="flex items-center gap-2 p-3 mb-3">
          <SidebarMenu icon="bx-home-alt-2" name="dashboard" />
        </Link>
        <span className="font-semibold uppercase text-sm text-gray-400 px-3">
          dashboard
        </span>
        <div>
          {data.sidebar.map((i, index) =>
            i.isSubmenu ? (
              <div key={i.name}>
                <div
                  onClick={() =>
                    handleSubmenu(i.name == showSubMenu ? "" : i.name)
                  }
                  className="flex justify-between items-center pr-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2 p-3 ">
                    <SidebarMenu icon={i.icon} name={i.name} />
                  </div>

                  <i
                    className={`bx 
                  ${
                    showSubMenu == i.name
                      ? "bx-chevron-down"
                      : "bx-chevron-right"
                  }  text-lg font-bold`}
                  ></i>
                </div>
                <ul
                  className={`transition-all duration-900 ease-in-out overflow-hidden ${
                    showSubMenu == i.name ? "max-h-40" : "max-h-0"
                  }`}

                  // className={
                  //   showSubMenu == i.name
                  //     ? " block transistion-500ms"
                  //     : " hidden transistion-500ms"
                  // }
                >
                  {i?.submenu?.map((s) => (
                    <li key={s.path}>
                      <Link
                        href={s.path}
                        className="flex items-center gap-2 py-3 px-6"
                      >
                        <SidebarMenu icon={s.icon} name={s.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={index}
                href={i.path as string}
                className="flex items-center gap-2 p-3 "
              >
                <SidebarMenu icon={i.icon} name={i.name} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
