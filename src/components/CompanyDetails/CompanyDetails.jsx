import React from "react";
import "./CompanyDetails.css";

const CompanyDetails = () => {
  return (
    <>
      <div className="company-details-section">
        <ul>
          <li>
            <span className="company-details-data">Name :</span> LeadTronix Pvt.
            ltd.
          </li>
          <li>
            <span className="company-details-data">Phone No :</span>
            0250-2536147
          </li>
          <li>
            <span className="company-details-data">Email ID : </span>
            accounts@invoicemaker.com
          </li>
          <li>
            <span className="company-details-data">Bank Name : </span> ICICI
            Bank ltd.
          </li>
          <li>
            <span className="company-details-data">Account holder Name : </span>
            LeadTronics Pvt. Ltd.
          </li>
          <li>
            <span className="company-details-data">Account Number : </span>
            1357902468169
          </li>
        </ul>
      </div>
    </>
  );
};

export default CompanyDetails;
