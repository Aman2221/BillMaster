import React from "react";
import Link from "next/link";

const TableComp = ({
  headings = [],
  values = [],
}: {
  headings?: string[];
  values?: any[];
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headings.map((item, index) => (
            <th key={item + index} scope="col" className="px-4 py-3 text-xs">
              {item.replace("_", " ")}
            </th>
          ))}
        </tr>
      </thead>
      {values.map((item, i) => (
        <tbody key={i}>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {Object.values(item).map((item, i) => {
              return (
                <>
                  {item == "action" ? (
                    <th
                      key={item as string}
                      scope="row"
                      className="px-4 py-3 text-sm  text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {headings.includes("invoice_id") ? (
                        <Link
                          href="/invoice"
                          className="flex-center text-xs rounded bg-gray-600 text-black cursor-pointer"
                        >
                          <i className="bx bx-dots-horizontal-rounded text-white text-sm"></i>
                        </Link>
                      ) : (
                        <Link
                          href="/invoice"
                          className="bg-gray-600 p-1 rounded cursor-pointer"
                        >
                          <i className="bx bxs-file-pdf text-sm"></i>
                        </Link>
                      )}
                    </th>
                  ) : item == "paid" || item == "unpaid" ? (
                    <th
                      key={item as string}
                      scope="row"
                      className={`px-4 py-3 text-xs`}
                    >
                      {item == "paid" ? (
                        <span className="px-1 text-xs rounded bg-green-300 text-black cursor-pointer capitalize font-normal">
                          paid
                        </span>
                      ) : (
                        <span className="px-1 text-xs rounded bg-red-300 text-black cursor-pointer capitalize font-normal">
                          Unpaid
                        </span>
                      )}
                    </th>
                  ) : (
                    <th
                      key={item as string}
                      scope="row"
                      className="px-4 py-3 capitalize font-normal  text-xs text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item as string}
                    </th>
                  )}
                </>
              );
            })}
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TableComp;
