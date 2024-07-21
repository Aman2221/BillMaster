import React from "react";
import DashboardCard from "./DashboardCard";
import data from "@/json/index.json";

const DashboardPg = () => {
  return (
    <>
      <div className="flex gap-10 dm-sans">
        <DashboardCard />
        <div className="flex flex-col text-base flex-1 justify-between shadow-lg shadow-gray-800 rounded">
          <div className="p-4 flex items-center justify-between w-full">
            <span className="text-2xl">Today&apos;s Overview</span>
            <select
              name="overview"
              id="overview"
              className="brder px-3 py-2 bg-transparent capitalize outline-none border border-gray-600"
            >
              {data.overview_filter.map((item) => (
                <option
                  className="capitalize bg-black py-2 px-4 border-none outline-none pr-3"
                  key={item}
                  value={item}
                >
                  {item.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>
          <div className="border-gray-600 border-t w-full flex justify-between">
            {data.overview.map((item) => (
              <div
                key={item.name}
                className="flex flex-col w-full py-3 px-4 border-r border-gray-600"
              >
                <span className="text-2xl font-semibold">{item.count}</span>
                <div className="flex justify-between items-center w-full mt-4">
                  <span className="capitalize">{item.name}</span>
                  <div
                    className={`rounded-full ${item.icon_bg} h-8 w-8 flex-center`}
                  >
                    <i className={`bx ${item.icon} text-lg`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPg;
