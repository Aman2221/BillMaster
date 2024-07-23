import MapChart from "@/charts/MapChart";
import TableComp from "@/common/Table";
import Link from "next/link";
import React from "react";
import data from "@/json/index.json";

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
            <TableComp
              headings={Object.keys(data.seles_rev[0])}
              values={data.seles_rev}
            />
          </div>
        </div>
      </div>

      <div className="shadow-gray-800 shadow-md rounded-sm dm-sans py-3 px-4 w-[40%]">
        <div className="font-semibold border-b border-gray-800 p-3">
          <span>Latest Invoice List</span>
        </div>
        <div className="mt-3">
          <TableComp
            headings={Object.keys(data.invoice_list[0])}
            values={data.invoice_list}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesRevenue;
