import React from "react";
import "./Table.css";

const Table = ({
  list
}) => {
  return (
    <>
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
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
    </>
  );
};

export default Table;
