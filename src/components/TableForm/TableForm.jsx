import { useEffect } from "react";
import "./TableForm.css";

const TableForm = ({
  material,
  setMaterial,
  workHours,
  setWorkHours,
  workExpenses,
  setWorkExpenses,
  labourExpenses,
  setLabourExpenses,
  totalAmount,
  setTotalAmount,
}) => {
  useEffect(() => {
    const calculateTotalAmount = (totalAmount) => {
      setTotalAmount(workExpenses * labourExpenses);
    };
    calculateTotalAmount(totalAmount);
  }, [labourExpenses, workExpenses, totalAmount]);

  return (
    <>
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
    </>
  );
};

export default TableForm;
