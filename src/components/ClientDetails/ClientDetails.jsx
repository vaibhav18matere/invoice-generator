import React from "react";

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <>
      <section className="client-section">
        <h4 className="hero-name">Client Name : {clientName}</h4>
        <h6> Client Address : {clientAddress}</h6>
      </section>
    </>
  );
};

export default ClientDetails;
