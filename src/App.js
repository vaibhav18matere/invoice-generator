import "./App.css";

function App() {
  return (
    <>
      <main className="main-container">
        {/* header */}
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
        {/* header end */}
        {/* company details */}
        <section className="company-section">
          <h4 className="hero-name">Lead Tronics</h4>
          <p>Address:</p>
        </section>
        {/* company details end */}
        {/* clients details */}
        <section className="client-section">
          <h4 className="hero-name">client name</h4>
          <p>Client's address:</p>
        </section>
        {/* clients details end */}
        <article className="invoice-section">
          <ul>
            <li>
              <span className="invoice-data">Invoice Number</span>
            </li>
            <li>
              <span className="invoice-data">Invoice Date</span>
            </li>
            <li>
              <span className="invoice-data">Due Date</span>
            </li>
          </ul>
        </article>
        {/* table */}
        <div className="section-table">THIS IS TABLE</div>
        {/* table end */}
        {/* notes */}
        <section className="client-note">
          <p>Notes for client</p>
        </section>
        {/* footer */}
        <ul className="footer-section">
          <li>
            <span className="footer-data">Name :</span> Vaibhav Matere
          </li>
          <li>
            <span className="footer-data">Email :</span> vpm00718897@gmail.com
          </li>
          <li>
            <span className="footer-data">Phone No :</span> 9527032392
          </li>
          <li>
            <span className="footer-data">Bank Name :</span> ICICI Bank
          </li>
          <li>
            <span className="footer-data">Account holder Name :</span> Vaibhav Matere
          </li>
          <li>
            <span className="footer-data">Account Number :</span> 1365478321085
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;