import React, { useState, useEffect } from "react";
import "./TableForm.css";
import { v4 as uuid } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
  totalAmountToPay,
  setTotalAmountToPay,
}) => {
  const [isEditing, setIsEditing] = useState(false);

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
    setIsEditing(false);
  };

  // To calculate total amount

  useEffect(() => {
    const calculateTotalAmount = (totalAmount) => {
      setTotalAmount(workHours * ratePerHour + workExpenses + labourExpenses);
    };
    calculateTotalAmount(totalAmount);
  }, [workHours, ratePerHour, labourExpenses, workExpenses, totalAmount]);

  // To Calculate total amount to pay

  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotalAmountToPay(sum);
      }
    }
  });

  // currency formatter for Rupees

  var formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  // To Edit invoice

  const editInvoice = (id) => {
    const editingInvoice = list.find((invoice) => invoice.id === id);
    setList(list.filter((invoice) => invoice.id !== id));
    setIsEditing(true);
    setMaterial(editingInvoice.material);
    setWorkHours(editingInvoice.workHours);
    setRatePerHour(editingInvoice.ratePerHour);
    setWorkExpenses(editingInvoice.workExpenses);
    setLabourExpenses(editingInvoice.labourExpenses);
    setTotalAmount(editingInvoice.totalAmount);
  };

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
          {isEditing ? "Edit invoice" : "Add invoice"}
        </button>
      </form>

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
                  <td className="amount">{totalAmount}</td>
                  <td>
                    <button onClick={() => deleteInvoice(id)}>
                      <AiOutlineDelete className="invoice-btn delete-btn" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editInvoice(id)}>
                      <AiOutlineEdit className="invoice-btn edit-btn" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
      <div>
        <h2 className="total-amount-to-pay">
          Total Amount : {formatter.format(totalAmountToPay)}
        </h2>
      </div>
    </>
  );
};

export default TableForm;
