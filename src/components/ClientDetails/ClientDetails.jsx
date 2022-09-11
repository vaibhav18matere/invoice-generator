import React from "react";
import "./ClientDetails.css";

const ClientDetails = ({ clientName, clientAddress, clientEmail }) => {
  const handleClientDetail = (e) => {
    e.preventDefault();
  };

  return (
    <form className="client-section" onSubmit={handleClientDetail}>
      <p>
        Client Name : <span className="client-data-input">{clientName}</span>
      </p>
      <p>
        Client Address : <span className="client-data-input">{clientAddress}</span>
      </p>
      <p>
        Client's Email : <span className="client-data-input">{clientEmail}</span>
      </p>
      <button className="send-email">Send E-Mail to Client</button>
    </form>
  );
};

export default ClientDetails;
