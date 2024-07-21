"use client";
import React from "react";
import DashboardCard from "./DashboardCard";
import DashboardOverview from "./DashboardOverview";
import PaymentActivity from "./PaymentActivity";
import CalendarButton from "@/common/CalendarButton";
import LineChart from "@/charts/LineChart";
import MapChart from "@/charts/MapChart";

const DashboardPg = () => {
  return (
    <>
      <div className="flex gap-10 dm-sans">
        <DashboardCard />
        <DashboardOverview />
      </div>
      <PaymentActivity />
      <div className="flex mt-10 dm-sans gap-10">
        <div className="p-3 shadow-gray-800 shadow-lg w-[40%] rounded-sm max-h-max">
          <span className="text-base">Latest Client List</span>

          <div className="relative overflow-x-auto py-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    sr. no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    clinet name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    01
                  </th>
                  <td className="px-6 py-4">New client</td>
                  <td className="px-6 py-4">info@gmail.com</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-600 p-1 rounded">
                      <i className="bx bxs-file-pdf text-sm"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="shadow-gray-800 shadow-lg w-[30%] rounded-sm pb-3">
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
      <div className="shadow-gray-800 shadow-lg rounded-sm dm-sans py-3 px-4 w-[60%]">
        <div className="">
          <MapChart />
        </div>
      </div>
    </>
  );
};

export default DashboardPg;
