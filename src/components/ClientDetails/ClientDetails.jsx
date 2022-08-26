import React from "react";

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <>
      <section className="client-section">
        <h4 className="hero-name">{clientName}</h4>
        <p>{clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetails;
