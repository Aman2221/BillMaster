import LineChart from "@/charts/LineChart";
import CalendarButton from "@/common/CalendarButton";
import TableComp from "@/common/Table";
import React from "react";
import data from "@/json/index.json";

const ClientList = () => {
  return (
    <div className="flex mt-10 dm-sans gap-10">
      <div className="p-3 shadow-gray-800 shadow-md w-[40%] rounded-sm max-h-max">
        <span className="text-base">Latest Client List</span>

        <div className="relative overflow-x-auto py-3"></div>
        <TableComp
          headings={Object.keys(data.client_list[0])}
          values={data.client_list}
        />
      </div>
      <div className="shadow-gray-800 shadow-md w-[30%] rounded-sm pb-3">
        <div className="flex items-center justify-between border-b border-gray-600 py-3 px-4">
          <span>Payment Overview</span>
          <CalendarButton />
        </div>
        <div className="py-6 px-4 w-full">
          <LineChart />
        </div>
        <div className="flex">
          <div className="flex-1 flex-center flex-col border-r border-gray-700">
            <span>Paid amount</span>
            <span>0</span>
          </div>
          <div className="flex-1 flex-center flex-col">
            <span>Paid amount</span>
            <span>1233</span>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 shadow-lg w-[30%] rounded-sm dm-sans p-3">
        <span>Recent transactions</span>
        <div className="flex justify-between items-center py-3 border-b border-gray-600">
          <div className="flex gap-4">
            <div className="bg-gray-600 flex-center rounded-full w-10 h-10">
              <i className="bx bxl-paypal text-lg"></i>
            </div>
            <div className="flex flex-col">
              <span>Invoice</span>
              <span className="text-xs">20 Jan, 2024 04:12:39</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded px-2">
            <span className="text-xs">$1223</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
