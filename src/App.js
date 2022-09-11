import { useState, useRef } from "react";
import "./App.css";
import ReactToPrint from "react-to-print";
import {
  ClientDetails,
  ClientNotes,
  CompanyDetails,
  Header,
  InvoiceDetails,
  Table,
  TableForm,
} from "./components";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceNotes, setInvoiceNotes] = useState(
    "Please check all the details"
  );
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [material, setMaterial] = useState();
  const [workHours, setWorkHours] = useState();
  const [ratePerHour, setRatePerHour] = useState();
  const [workExpenses, setWorkExpenses] = useState();
  const [labourExpenses, setLabourExpenses] = useState();
  const [totalAmount, setTotalAmount] = useState("");
  const [list, setList] = useState([]);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const componentRef = useRef();

  const printHandler = () => {
    window.print();
  };
  return (
    <>
      <main className="main-container">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className="btn-print">Print / Download</button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              <Header printHandler={printHandler} />
              <CompanyDetails
                name={name}
                email={email}
                address={address}
                contactNum={contactNum}
                bankName={bankName}
                accountHolderName={accountHolderName}
                accountNum={accountNum}
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
              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
                clientEmail={clientEmail}
              />
            </div>
            <button
              className="add-invoice-btn"
              onClick={() => setShowInvoice(false)}
            >
              Edit Invoice Info
            </button>
          </>
        ) : (
          <>
            <div className="alternative-container">
              <label htmlFor="name">Enter Your Name </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="type your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Enter Your Address </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="type your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email">Enter Your Email </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="type your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="accountNum">Enter Your Contact No </label>
              <input
                type="number"
                name="contactNum"
                id="contactNum"
                placeholder="type your contact number"
                autoComplete="off"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
              />

              <label htmlFor="bank-name">Enter Your Bank's Name </label>
              <input
                type="text"
                name="bank-name"
                id="bank-name"
                placeholder="type your bank's name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <label htmlFor="acc-holder">Enter Account Holder's Name </label>
              <input
                type="text"
                name="acc-holder"
                id="acc-holder"
                placeholder="type account holder's name"
                autoComplete="off"
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
              />

              <label htmlFor="accountNum">Enter Your Account No </label>
              <input
                type="number"
                name="accountNum"
                id="accountNum"
                placeholder="type your account number"
                autoComplete="off"
                value={accountNum}
                onChange={(e) => setAccountNum(e.target.value)}
              />

              <label htmlFor="clientname">Enter Client's Name </label>
              <input
                type="text"
                name="clientname"
                id="clientname"
                placeholder="type client's name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientaddress">Enter Client's Address </label>
              <input
                type="text"
                name="clientaddress"
                id="clientaddress"
                placeholder="type client's address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="clientEmail">Enter Client's Email ID </label>
              <input
                type="text"
                name="clientEmail"
                id="clientEmail"
                placeholder="type client's email ID"
                autoComplete="off"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
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
                className="check-invoice-btn"
                onClick={() => setShowInvoice(true)}
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
