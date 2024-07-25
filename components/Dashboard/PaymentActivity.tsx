import BarChart from "@/charts/BarChart";
import DonutChart from "@/charts/DounutChart";
import CalendarButton from "@/common/CalendarButton";
import React from "react";

const PaymentActivity = () => {
  return (
    <div className="mt-10 flex gap-10">
      <div className="shadow-gray-800 shadow-md w-[75%] rounded-sm">
        <div className="border-b border-gray-600 px-4 py-3 flex items-center justify-between">
          <span className="text-base dm-sans font-semibold">
            Payment Activity
          </span>
          <div className="gap-2 flex">
            {["1m", "6m", "12y"].map((i) => (
              <span
                key={i}
                className="bg-gray-600 cursor-pointer text-white rounded-sm py-1 px-2 uppercase  text-sm"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end pt-2 pr-4 dm-sans text-green-700 font-semibold">
          <div className="flex gap-4">
            <span>Paid: $0</span>
            <span>Unpaid: $45195</span>
          </div>
        </div>
        <div className="py-6 px-4 w-full">
          <BarChart />
        </div>
      </div>
      <div className="px-4 py-2 shadow-gray-800 shadow-md w-[35%] rounded-sm">
        <div className=" flex items-center justify-between">
          <span className="text-base dm-sans font-semibold">Structure</span>
          <CalendarButton extrClss="-left-64" />
        </div>
        <div className="py-6">
          <DonutChart />
        </div>
        <div className="flex justify-between dm-sans">
          <div className="flex gap-2">
            <i className="bx bx-radio-circle-marked text-green-600 text-lg"></i>
            <span>Paid</span>
          </div>
          <span className="bg-green-700 px-2 py-1 text-xs rounded">$0</span>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
            <i className="bx bx-radio-circle-marked text-green-600 text-lg"></i>
            <span>Unpaid</span>
          </div>
          <span className="bg-green-700 px-2 py-1 text-xs rounded">
            $234230
          </span>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
            <i className="bx bx-radio-circle-marked text-green-600 text-lg"></i>
            <span>Cancelled</span>
          </div>
          <span className="bg-green-700 px-2 py-1 text-xs rounded">$876</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentActivity;
