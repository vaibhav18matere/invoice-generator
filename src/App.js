import { useState } from "react";
import "./App.css";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import ClientNotes from "./components/ClientNotes/ClientNotes";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";
import Table from "./components/Table/Table";
import TableForm from "./components/TableForm/TableForm";

function App() {
  const [name, setName] = useState("Vaibhav Matere");
  const [address, setAddress] = useState("Nashik");
  const [email, setEmail] = useState("vpm18897@gmail.com");
  const [showInvoice, setShowInvoice] = useState(true);
  const [clientName, setClientName] = useState("Astitva Agro");
  const [clientAddress, setClientAddress] = useState("Chinchkhed");
  const [invoiceNumber, setInvoiceNumber] = useState("362574190");
  const [invoiceNotes, setInvoiceNotes] = useState("Please pay fast");
  const [invoiceDate, setInvoiceDate] = useState("10/08/2022");
  const [dueDate, setDueDate] = useState("01/09/2022");
  const [material, setMaterial] = useState();
  const [workHours, setWorkHours] = useState();
  const [ratePerHour, setRatePerHour] = useState();
  const [workExpenses, setWorkExpenses] = useState();
  const [labourExpenses, setLabourExpenses] = useState();
  const [totalAmount, setTotalAmount] = useState("");
  const [list, setList] = useState([]);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);

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
            <Table
              material={material}
              workHours={workHours}
              ratePerHour={ratePerHour}
              workExpenses={workExpenses}
              labourExpenses={labourExpenses}
              totalAmount={totalAmount}
              list={list}
              setList={setList}
              totalAmountToPay={totalAmountToPay}
              setTotalAmountToPay={setTotalAmountToPay}
            />
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
              <label htmlFor="invoiceNumber">Enter Invoice Number </label>
              <input
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="type invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <article>
                <TableForm
                  material={material}
                  setMaterial={setMaterial}
                  workHours={workHours}
                  setWorkHours={setWorkHours}
                  ratePerHour={ratePerHour}
                  setRatePerHour={setRatePerHour}
                  workExpenses={workExpenses}
                  setWorkExpenses={setWorkExpenses}
                  labourExpenses={labourExpenses}
                  setLabourExpenses={setLabourExpenses}
                  totalAmount={totalAmount}
                  setTotalAmount={setTotalAmount}
                  list={list}
                  setList={setList}
                  totalAmountToPay={totalAmountToPay}
                  setTotalAmountToPay={setTotalAmountToPay}
                />
              </article>
              <label htmlFor="invoiceNotes">Enter Invoice Notes </label>
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
              <label htmlFor="dueDate">Enter Due Date </label>
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
