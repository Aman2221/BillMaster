import React from "react";
import data from "@/json/index.json";
import Select from "@/common/Select";

const DashboardOverview = () => {
  return (
    <div className="flex flex-col text-base flex-1 justify-between shadow-lg shadow-gray-800 rounded-sm">
      <Select heading="Today's Overview" data={data.overview_filter} />
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
  );
};

export default DashboardOverview;
