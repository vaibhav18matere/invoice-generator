import React from "react";
import "./InvoiceDetails.css";

export const InvoiceDetails = ({ invoiceNumber, invoiceDate, dueDate }) => {
  return (
    <>
      <article className="invoice-section">
        <ul>
          <li>
            <span className="invoice-data">
              Invoice Number : {invoiceNumber}
            </span>
          </li>
          <li>
            <span className="invoice-data invoice-date">Invoice Date : {invoiceDate}</span>
          </li>
          <li>
            <span className="invoice-data">Due Date: {dueDate}</span>
          </li>
        </ul>
      </article>
    </>
  );
};