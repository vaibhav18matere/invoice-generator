import React from "react";

const InvoiceDetails = () => {
  return (
    <>
      <article className="invoice-section">
        <ul>
          <li>
            <span className="invoice-data">Invoice Number</span>
          </li>
          <li>
            <span className="invoice-data">Invoice Date</span>
          </li>
          <li>
            <span className="invoice-data">Due Date</span>
          </li>
        </ul>
      </article>
    </>
  );
};

export default InvoiceDetails;
