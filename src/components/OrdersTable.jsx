import React from "react";

const OrdersTable = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: 120.0, phone: "098765432",
        Product: "product a",quantity: "32", City: "jigjiga", House: "05/435",
          status: "Completed" },
    { id: 2, customer: "Jane Smith", total: 85.5, status: "Pending" },
    { id: 3, customer: "Alice Johnson", total: 45.3, status: "Cancelled" },
    { id: 3, customer: "Alice Johnson", total: 45.3, status: "Cancelled" },
    { id: 2, customer: "Jane Smith", total: 85.5, status: "Pending" },
    { id: 3, customer: "Alice Johnson", total: 45.3, status: "Cancelled" },
    { id: 3, customer: "Alice Johnson", total: 45.3, status: "Cancelled" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Order ID</th>
            <th className="border-b p-2">Customer</th>
            <th className="border-b p-2">Product</th>
            <th className="border-b p-2">quantity</th>
            <th className="border-b p-2"> City</th>
            <th className="border-b p-2">House Number</th>
            <th className="border-b p-2">phone number</th>
            <th className="border-b p-2">Total</th>
            <th className="border-b p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border-b p-2">{order.id}</td>
              <td className="border-b p-2">{order.customer}</td>
              <td className="border-b p-2">{order.Product}</td>
              <td className="border-b p-2">{order.quantity}</td>
              <td className="border-b p-2">{order.City}</td>
              <td className="border-b p-2">{order.House}</td>
              <td className="border-b p-2">{order.phone}</td>
              <td className="border-b p-2">${order.total.toFixed(2)}</td>
              <td className="border-b p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
