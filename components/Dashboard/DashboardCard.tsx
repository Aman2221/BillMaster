import GreenButton from "@/common/GreenButton";
import Image from "next/image";
import React from "react";

const DashboardCard = () => {
  return (
    <div className="dashboard-sec">
      <span className="uppercase font-semibold text-gray-400 dm-sans">
        dashboard
      </span>
      <div className="flex justify-between shadow-md shadow-gray-800 rounded p-4 gap-20">
        <div className="flex flex-col justify-start items-start">
          <span className="dm-sans text-lg">
            Professional Invoices Made Easy.
          </span>
          <span className="dm-sans w-96 pt-2">
            Quickly understand who your best customers little and motivation to
            pay thair bills.
          </span>
          <GreenButton
            text="watch tutorial"
            extrClss="text-base py-2 px-4 mt-4"
          />
        </div>
        <>
          <Image
            src="/img/invoice-widget.png"
            height={0}
            width={0}
            sizes="100vw"
            className="h-24 w-24"
            alt="dashboard img"
          />
        </>
      </div>
    </div>
  );
};

export default DashboardCard;
