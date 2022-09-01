import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <ul>
          <li>
            <span className="footer-data">Phone No :</span> 0250-2536147
          </li>
          <li>
            <span className="footer-data">Email ID : </span>
            accounts@invoicemaker.com
          </li>
          <li>
            <span className="footer-data">Bank Name : </span> ICICI Bank ltd.
          </li>
          <li>
            <span className="footer-data">Account holder Name : </span>
            Invoice generators pvt. ltd.
          </li>
          <li>
            <span className="footer-data">Account Number : </span> 1357902468169
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
