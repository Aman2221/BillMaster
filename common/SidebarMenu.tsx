import React from "react";

const SidebarMenu = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <>
      <i className={`bx ${icon} text-lg`}></i>
      <span className="capitalize text-base">{name}</span>
    </>
  );
};

export default SidebarMenu;
