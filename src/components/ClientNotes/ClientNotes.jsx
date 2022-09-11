import React from "react";
import "./ClientNotes.css";

export const ClientNotes = ({ invoiceNotes }) => {
  return (
    <>
      <section className="client-note">
        <p className="client-msg">Additional Notes : {invoiceNotes} </p>
      </section>
    </>
  );
};
