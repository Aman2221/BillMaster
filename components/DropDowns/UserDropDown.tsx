import React from "react";
import data from "@/json/index.json";
import Link from "next/link";
import Image from "next/image";

const UserDropDown = ({
  show = false,
  langMenu = false,
  handleClick = () => {},
}: {
  show?: boolean;
  langMenu?: boolean;
  handleClick?: (a: { imrURL: string; name: string }) => void;
}) => {
  return (
    <div>
      <div
        id="dropdown"
        className={`${
          show ? "flex" : "hidden"
        } z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 animate__animated animate__fadeIn`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full"
          aria-labelledby="dropdownDefaultButton"
        >
          {langMenu ? (
            <>
              {data.flags.map((item) => (
                <li
                  key={item.name}
                  className={`w-full flex items-center px-4 py-2 gap-2 hover:text-white hover:font-semibold`}
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-6 h-6 rounded-md"
                    src={item.imrURL}
                    alt="country flag"
                  />
                  <button
                    onClick={() => handleClick(item)}
                    className={`capitalize w-full flex dm-sans`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </>
          ) : (
            <>
              {data.userMenu.map((item) => (
                <li
                  key={item.name}
                  className={`${
                    item.name == "logout"
                      ? "border-white border-t py-3"
                      : item.name == "site settings"
                      ? "pt-2 pb-3"
                      : "py-2"
                  } w-full flex items-center px-4 gap-2 hover:text-white hover:font-semibold`}
                >
                  <i className={`bx ${item.icon}`}></i>
                  <Link
                    href={item.path}
                    className={`capitalize w-full flex  dm-sans`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserDropDown;
