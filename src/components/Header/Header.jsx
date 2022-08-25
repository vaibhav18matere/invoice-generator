import React from "react";

const Header = () => {
  return (
    <>
      <header className="main-invoice">
        <div>
          <h3 className="title">Invoice</h3>
        </div>
        <div>
          <ul className="header-section">
            <li>
              <button className="btn btn-print">Print</button>
            </li>
            <li>
              <button className="btn btn-download">Download</button>
            </li>
            <li>
              <button className="btn btn-send">Send E-mail</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
