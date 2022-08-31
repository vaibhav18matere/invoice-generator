import React from "react";

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <>
      <section className="client-section">
        <h4 className="hero-name">Client Name : {clientName}</h4>
        <h5> Client Address : {clientAddress}</h5>
      </section>
    </>
  );
};

export default ClientDetails;
