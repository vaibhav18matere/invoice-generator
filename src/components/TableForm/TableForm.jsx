import React, { useEffect } from "react";
import "./TableForm.css";
import { v4 as uuid } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";

const TableForm = ({
  material,
  setMaterial,
  workHours,
  setWorkHours,
  ratePerHour,
  setRatePerHour,
  workExpenses,
  setWorkExpenses,
  labourExpenses,
  setLabourExpenses,
  totalAmount,
  setTotalAmount,
  list,
  setList,
}) => {
  // To submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      id: uuid(),
      material,
      workHours,
      ratePerHour,
      workExpenses,
      labourExpenses,
      totalAmount,
    };
    setMaterial("");
    setWorkHours("");
    setRatePerHour("");
    setWorkExpenses("");
    setLabourExpenses("");
    setTotalAmount("");
    setList([...list, newInvoice]);
    console.log(list);
  };
  // To calculate total amount
  useEffect(() => {
    const calculateTotalAmount = (totalAmount) => {
      setTotalAmount(workHours * ratePerHour + workExpenses + labourExpenses);
    };
    calculateTotalAmount(totalAmount);
  }, [workHours, ratePerHour, labourExpenses, workExpenses, totalAmount]);

  // To Edit invoice

  // To Delete invoice
  const deleteInvoice = (id) =>
    setList(list.filter((invoice) => invoice.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="material-name">
          <label htmlFor="material">Material Name</label>
          <input
            type="text"
            name="material"
            id="material"
            placeholder="enter material name"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>
        <div className="expenses">
          <div className="hours-of-work">
            <label htmlFor="hours-of-work">Hours of work</label>
            <input
              type="number"
              name="hours-of-work"
              id="hours-of-work"
              placeholder="enter hours of work"
              value={workHours}
              onChange={(e) => setWorkHours(e.target.value)}
            />
          </div>
          <div className="rate-per-hour">
            <label htmlFor="rate-per-hour">Rate per hour</label>
            <input
              type="number"
              name="rate-per-hour"
              id="rate-per-hour"
              placeholder="enter rate-per-hour"
              value={ratePerHour}
              onChange={(e) => setRatePerHour(e.target.value)}
            />
          </div>
          <div className="work-expenses">
            <label htmlFor="work-expenses">Work Related Expenses</label>
            <input
              type="number"
              name="work-expenses"
              id="work-expenses"
              placeholder="enter work-expenses"
              value={workExpenses}
              onChange={(e) => setWorkExpenses(e.target.value)}
            />
          </div>
          <div className="labour-expenses">
            <label htmlFor="labour-expenses">Labour Relatedd Expenses</label>
            <input
              type="number"
              name="labour-expenses"
              id="labour-expenses"
              placeholder="enter labour-expenses"
              value={labourExpenses}
              onChange={(e) => setLabourExpenses(e.target.value)}
            />
          </div>
          <div className="total-amount">
            <label htmlFor="total-amount">Total Amount</label>
            <p>{totalAmount}</p>
          </div>
        </div>
        <button className="check-invoice-btn" type="submit">
          Add Invoive Item
        </button>
      </form>

      {/* table items */}
      <table className="invoice-table">
        <thead className="invoice-table-title">
          <tr>
            <td className="table-title-item">Material</td>
            <td className="table-title-item">Work hours</td>
            <td className="table-title-item">Rate per hour</td>
            <td className="table-title-item">Work expenses</td>
            <td className="table-title-item">Labour expenses</td>
            <td className="table-title-item">Total amount</td>
          </tr>
        </thead>
        {list.map(
          ({
            id,
            material,
            workHours,
            ratePerHour,
            workExpenses,
            labourExpenses,
            totalAmount,
          }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{material}</td>
                  <td>{workHours} </td>
                  <td>{ratePerHour} </td>
                  <td>{workExpenses}</td>
                  <td>{labourExpenses}</td>
                  <td>{totalAmount}</td>
                  <td>
                    <button onClick={() => deleteInvoice(id)}>
                      <AiOutlineDelete className="delete-btn" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
    </>
  );
};

export default TableForm;
