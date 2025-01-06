import React from "react";
import Sidebar from "./Sidebar";
import SummaryCards from "./SummaryCards";
import ChartsSection from "./ChartsSection";
import OrdersTable from "./OrdersTable";

const Dashboard = ({ cart }) => {
  return (
    <div className="flex mt-[10vh] h-screen overflow-y-auto bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl text-center font-bold mb-4">Dashboard</h1>
        <SummaryCards cart={cart} />
        <ChartsSection />
        <OrdersTable />
      </main>
    </div>
  );
};

export default Dashboard;
