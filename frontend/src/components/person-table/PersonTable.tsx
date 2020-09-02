import React from "react";
import { Person } from "../../models/person.model";

import "./PersonTable.css";

interface PersonTableProps {
  data: Person[];
}

const PersonTable: React.FC<PersonTableProps> = (props) => {
  const renderPersonsRows = (persons: Person[]) => {
    return (
      <React.Fragment>
        {persons.map((person) => (
          <tr key={person.id}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.amount}</td>
          </tr>
        ))}
      </React.Fragment>
    );
  };

  return (
    <table className="person-table">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Amount</th>
      </tr>
      {props.data?.length === 0 ? <tr>None</tr> : renderPersonsRows(props.data)}
    </table>
  );
};

export default PersonTable;
