import React from "react";
import "./ClientDetails.css";

const ClientDetails = ({ clientName, clientAddress, email }) => {
  const handleClientDetail = (e) => {
    e.preventDefault();
  };

  return (
    <form className="client-section" onSubmit={handleClientDetail}>
      <p>Client Name : {clientName}</p>
      {/* <input type="text" id="client-name" name="client-name" /> */}
      <p>Client Address : {clientAddress}</p>
      {/* <input type="text" id="client-address" name="client-address" /> */}
      <p for="email">Client's Email : {email}</p>
      {/* <input type="email" id="email" name="email" /> */}
      <button className="send-email">Send E-Mail</button>
    </form>
  );
};

export default ClientDetails;
