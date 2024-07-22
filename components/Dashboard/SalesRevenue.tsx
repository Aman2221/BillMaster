import MapChart from "@/charts/MapChart";
import React from "react";

const SalesRevenue = () => {
  return (
    <div className="flex my-10 gap-6">
      <div className="shadow-gray-800 shadow-md rounded-sm dm-sans py-3 px-4 w-[60%]">
        <div className="font-semibold p-3 border-b border-gray-800">
          <span>Sales Revenue</span>
        </div>
        <div className="flex items-start">
          <div className="w-full">
            <MapChart />
          </div>
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    country
                  </th>
                  <th scope="col" className="px-6 py-3">
                    orders
                  </th>
                  <th scope="col" className="px-6 py-3">
                    earnings
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    No Transaction Found
                  </th>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="shadow-gray-800 shadow-md rounded-sm dm-sans py-3 px-4 w-[40%]">
        <div className="font-semibold p-3 border-b border-gray-800">
          <span>Sales Revenue</span>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                invoice id
              </th>
              <th scope="col" className="px-6 py-3">
                client
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                status
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
                #0000175515837
              </th>
              <td className="px-6 py-4">Joy</td>
              <td className="px-6 py-4">999</td>
              <td className="px-6 py-4">17 Jul, 2024</td>
              <td className="px-6 py-4">
                <span className="px-1 text-xs rounded bg-red-300 text-black cursor-pointer">
                  Unpaid
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="flex-center text-xs rounded bg-gray-600 text-black cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded text-white text-sm"></i>
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                #0000175515837
              </th>
              <td className="px-6 py-4">Joman</td>
              <td className="px-6 py-4">999</td>
              <td className="px-6 py-4">17 Jul, 2024</td>
              <td className="px-6 py-4">
                <span className="px-1 text-xs rounded bg-red-300 text-black cursor-pointer">
                  Unpaid
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="flex-center text-xs rounded bg-gray-600 text-black cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded text-white text-sm"></i>
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                #0000175515837
              </th>
              <td className="px-6 py-4">Stoled</td>
              <td className="px-6 py-4">999</td>
              <td className="px-6 py-4">17 Jul, 2024</td>
              <td className="px-6 py-4">
                <span className="px-1 text-xs rounded bg-red-300 text-black cursor-pointer">
                  Unpaid
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="flex-center text-xs rounded bg-gray-600 text-black cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded text-white text-sm"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesRevenue;
