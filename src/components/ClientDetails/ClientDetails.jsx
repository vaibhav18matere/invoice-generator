import React from "react";
import "./ClientDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ClientDetails = ({ clientName, clientAddress, clientEmail }) => {
  const sendMailHandlerToast = () => {
    toast("Email sent to user");
  };

  return (
    <div className="client-section">
      <p>
        Client Name : <span className="client-data-input">{clientName}</span>
      </p>
      <p>
        Client Address :{" "}
        <span className="client-data-input">{clientAddress}</span>
      </p>
      <p>
        Client's Email :{" "}
        <span className="client-data-input">{clientEmail}</span>
      </p>
      <button className="send-email" onClick={sendMailHandlerToast}>
        Send E-Mail to Client
      </button>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
