import React from "react";
import "./CompanyDetails.css";

const CompanyDetails = ({ name, address, email }) => {
  return (
    <>
      <section className="company-section">
        <h4 className="hero-name">Company Name : {name}</h4>
        <h5>Company Address :  {address}</h5>
      </section>
    </>
  );
};

export default CompanyDetails;
