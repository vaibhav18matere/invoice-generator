import React from "react";
import "./CompanyDetails.css";

export const CompanyDetails = ({
  name,
  address,
  email,
  contactNum,
  bankName,
  accountHolderName,
  accountNum,
}) => {
  return (
    <>
      <div className="company-details-section">
        <ul>
          <li>
            Name : <span className="company-details-data"> {name}</span>
          </li>
          <li>
            Email ID : <span className="company-details-data"> {email}</span>
          </li>
          <li>
            Address : <span className="company-details-data"> {address}</span>
          </li>
          <li>
            Contact No : 
            <span className="company-details-data"> {contactNum}</span>
          </li>
          <li>
            Bank Name : <span className="company-details-data"> {bankName}</span>
          </li>
          <li>
            Account holder Name :
            <span className="company-details-data"> {accountHolderName}</span>
          </li>
          <li>
            Account Number :
            <span className="company-details-data"> {accountNum}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
