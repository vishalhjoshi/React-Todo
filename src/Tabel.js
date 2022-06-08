import { useState } from "react";

const Tabel = ({ data, handleDelete }) => {
  return (
    <div className="tabel-container">
      <table>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Project</th>
          <th>Task</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Edit / Delete</th>
        </tr>
        {data &&
          data.map((i, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{i.name}</td>
              <td>{i.projectName}</td>
              <td>{i.description}</td>
              <td>{i.status}</td>
              <td>{i.startDate}</td>
              <td>{i.endDate}</td>
              <td>
                <div>
                  <button onClick={() => handleDelete(i)}>Edit</button>
                  <button onClick={() => alert("Delete")}>Dlete</button>
                </div>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Tabel;
