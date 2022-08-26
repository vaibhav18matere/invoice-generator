import { useState } from "react";
import "./App.css";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import ClientNotes from "./components/ClientNotes/ClientNotes";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";
import Table from "./components/Table/Table";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const printHandler = () => {
    window.print();
  };
  return (
    <>
      <main className="main-container">
        {showInvoice ? (
          <div>
            <Header printHandler={printHandler} />
            <CompanyDetails name={name} address={address} email={email} />
            <ClientDetails />
            <InvoiceDetails />
            <Table />
            <ClientNotes />
            <Footer />
            <button
              className="check-invoice-btn"
              onClick={() => setShowInvoice(false)}
            >
              Edit Invoice Info
            </button>
          </div>
        ) : (
          <>
            <div className="alternative-container">
              <label htmlFor="name">Enter Your Name </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="type your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Enter Your Address </label>
              <input
                type="text"
                name="text"
                id="address"
                placeholder="type your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email">Enter Your Email </label>
              <input
                type="email"
                name="text"
                id="email"
                placeholder="type your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                onClick={() => setShowInvoice(true)}
                className="check-invoice-btn"
              >
                Check Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
