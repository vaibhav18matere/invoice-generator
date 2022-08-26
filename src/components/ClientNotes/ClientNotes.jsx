import React from "react";
import "./ClientNotes.css";

const ClientNotes = ({ invoiceNotes }) => {
  return (
    <>
      <section className="client-note">
        <p>Additional notes : {invoiceNotes} </p>
      </section>
    </>
  );
};

export default ClientNotes;
