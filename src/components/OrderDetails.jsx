import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../assets/image2.png"; // Import the logo from assets folder

const OrderDetails = () => {
  const location = useLocation();
  const order = location.state?.order || {}; // Access the passed order object

  const orderId = order.id || "No ID"; // Default value if not found
  const orderDate = order.date || new Date().toLocaleDateString();
  const items = order.items || [];

  const calculateTotal = () =>
    items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

  const downloadPDF = () => {
    const element = document.getElementById("order-details"); // Get the content to export

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // Define width and height of the PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add the logo to the top of the PDF (use imported logo) with a circular border
      const logoX = 10; // X position of the logo
      const logoY = 10; // Y position of the logo
      const logoSize = 20; // Size of the logo (will be a circle)

      // Create a circular clip path
      pdf.setDrawColor(0); // Set the draw color (black)
      pdf.setFillColor(255, 255, 255); // Fill color for the circle (white)
      pdf.circle(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2, "S"); // Draw a circle
      pdf.addImage(logo, "PNG", logoX, logoY, logoSize, logoSize, "", "FAST"); // Add image inside circle

      // Add the title ("Mulu Gebeya") and "Order Details" centered at the top with the custom styling
pdf.setFontSize(24); // text-3xl equivalent
pdf.setTextColor(255, 165, 0); // Orange color (Mulu Gebeya)
pdf.setFont("helvetica", "bold"); // font-extrabold equivalent
pdf.text("Mulu Gebeya", pdfWidth / 2, 30, { align: "center" });

pdf.setFontSize(20); // Smaller size for "Order Details"
pdf.setTextColor(22, 163, 74); // Green color (Order Details)
pdf.text("Order Details", pdfWidth / 2, 40, { align: "center" });


      // Add the content (order summary)
      pdf.addImage(imgData, "PNG", 0, 50, pdfWidth, pdfHeight);

      // Save the PDF
      pdf.save(`Order_${orderId}.pdf`);
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-6 text-green-600">Order Details</h1>
      <p className="text-lg text-gray-700">Your order has been placed successfully!</p>

      <div
        id="order-details"
        className="mt-6 w-full max-w-3xl bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Order ID:</span> {orderId}
          </li>
          <li>
            <span className="font-semibold">Order Date:</span> {orderDate}
          </li>
        </ul>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Ordered product :</h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 rounded-lg p-4"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600">
                  {item.quantity} × ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl text-green-600 font-bold">${calculateTotal()}</span>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  );
};

export default OrderDetails;
