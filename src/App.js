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
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceNotes, setInvoiceNotes] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

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
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <InvoiceDetails
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table />
            <ClientNotes invoiceNotes={invoiceNotes} />
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
              <label htmlFor="clientname">Enter Client's Name </label>
              <input
                type="text"
                name="text"
                id="clientname"
                placeholder="type client's name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <label htmlFor="clientaddress">Enter Client's Address </label>
              <input
                type="text"
                name="text"
                id="clientaddress"
                placeholder="type client's address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              <label htmlFor="invoiceNumber">Enter invoice Number </label>
              <input
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="type invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <label htmlFor="invoiceNotes">Enter invoice Notes </label>
              <input
                type="text"
                name="invoiceNotes"
                id="invoiceNotes"
                placeholder="type invoice notes"
                autoComplete="off"
                value={invoiceNotes}
                onChange={(e) => setInvoiceNotes(e.target.value)}
              />
              <label htmlFor="invoiceDate">Enter Invoice Date </label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceNumber"
                placeholder="type invoice date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              <label htmlFor="dueDate">Enter due Date </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="type due date of invoice"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
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
