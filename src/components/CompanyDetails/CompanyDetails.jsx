import React from "react";
import "./CompanyDetails.css";

const CompanyDetails = ({ name, address, email }) => {
  return (
    <>
      <section className="company-section">
        <h4 className="hero-name">Company Name : {name}</h4>
        <h6>Company Address :  {address}</h6>
      </section>
    </>
  );
};

export default CompanyDetails;
