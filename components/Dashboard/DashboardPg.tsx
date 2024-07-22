"use client";
import React from "react";
import DashboardCard from "./DashboardCard";
import DashboardOverview from "./DashboardOverview";
import PaymentActivity from "./PaymentActivity";
import ClientList from "./ClientList";
import SalesRevenue from "./SalesRevenue";

const DashboardPg = () => {
  return (
    <div className="px-6 mt-6">
      <div className="flex gap-10 dm-sans">
        <DashboardCard />
        <DashboardOverview />
      </div>
      <PaymentActivity />
      <ClientList />
      <SalesRevenue />
    </div>
  );
};

export default DashboardPg;
