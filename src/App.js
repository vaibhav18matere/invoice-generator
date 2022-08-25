import "./App.css";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import ClientNotes from "./components/ClientNotes/ClientNotes";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <main className="main-container">
        <div>
          <Header />
          <CompanyDetails />
          <ClientDetails />
          <InvoiceDetails />
          <Table />
          <ClientNotes />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
