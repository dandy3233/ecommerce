import React from "react";

const SummaryCards = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold">Total Items in Cart</h2>
          <p className="text-3xl">{totalItems}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold">Total Cost</h2>
          <p className="text-3xl">${totalCost.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold">Unique Products</h2>
          <p className="text-3xl">{cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
