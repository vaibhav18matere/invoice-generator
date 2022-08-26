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
            <CompanyDetails />
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
              <input
                type="text"
                name="text"
                id="text"
                placeholder="type your name"
                autoComplete="off"
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
