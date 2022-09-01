import React from "react";
import "./Header.css";

const Header = ({ printHandler }) => {
  return (
    <>
      <header className="main-invoice">
        {/* <div>
          <h3 className="title">Invoice</h3>
        </div>
        <div>
          <ul className="header-section">
            <li>
              <button onClick={printHandler} className="btn btn-print">
                Print
              </button>
            </li>
            <li>
              <button className="btn btn-download">Download</button>
            </li>
            <li>
              <button className="btn btn-send">Send E-mail</button>
            </li>
          </ul>
        </div> */}
      </header>
    </>
  );
};

export default Header;
