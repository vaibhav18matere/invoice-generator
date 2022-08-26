import React from "react";
import "./CompanyDetails.css";

const CompanyDetails = ({ name, address, email }) => {
  return (
    <>
      <section className="company-section">
        <h2 className="hero-name">{name}</h2>
        <p>{address}</p>
        {/* <p>{email}</p> */}
      </section>
    </>
  );
};

export default CompanyDetails;
