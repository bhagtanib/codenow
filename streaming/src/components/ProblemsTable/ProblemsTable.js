import React from "react";
import styles from "./ProblemsTable.module.css";

const TableRow = ({ rowData }) => {
  return (
    <tr>
      <td>{rowData.Status ? "Active" : "Inactive"}</td>
      <td>{rowData.Title}</td>
      <td>{rowData.Solution}</td>
      <td>{rowData.Acceptance}</td>
      <td>{rowData.Difficulty}</td>
      <td>{rowData.Frequency}</td>
    </tr>
  );
};

const ProblemsTable = () => {
  const tableData = [
    {
      Status: true,
      Title:
        "Remove Nodes From Linked List Remove Nodes From Linked List Remove Nodes From Linked List Remove Nodes From Linked List",
      Solution: "Medium",
      Acceptance: "68%",
      Difficulty: "Hard",
      Frequency: "High",
    },
    {
      Status: true,
      Title: "Regular Expression Matching",
      Solution: "Hard",
      Acceptance: "85%",
      Difficulty: "Easy",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Remove Nodes From Linked List",
      Solution: "Medium",
      Acceptance: "68%",
      Difficulty: "Hard",
      Frequency: "High",
    },
    {
      Status: true,
      Title: "Regular Expression Matching",
      Solution: "Hard",
      Acceptance: "85%",
      Difficulty: "Easy",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Remove Nodes From Linked List",
      Solution: "Medium",
      Acceptance: "68%",
      Difficulty: "Hard",
      Frequency: "High",
    },
    {
      Status: true,
      Title: "Regular Expression Matching",
      Solution: "Hard",
      Acceptance: "85%",
      Difficulty: "Easy",
      Frequency: "Low",
    },
    // Add more data as needed
  ];

  return (
    <div className={styles.container}>
      {/* <div className={styles.wrapper}> */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Solution</th>
              <th>Acceptance</th>
              <th>Difficulty</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <>
                <TableRow key={index} rowData={rowData} />
                <TableRow key={index} rowData={rowData} />
                <TableRow key={index} rowData={rowData} />
                <TableRow key={index} rowData={rowData} />
                <TableRow key={index} rowData={rowData} />
              </>
            ))}
          </tbody>
        </table>
      {/* </div> */}
    </div>
  );
};

export default ProblemsTable;
