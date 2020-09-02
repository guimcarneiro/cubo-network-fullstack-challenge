import React from "react";

import "./PersonForm.css";

const PersonForm: React.FC = () => {
  return (
    <form className="person-form">
      <div className="inputs__container">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="number" placeholder="Amount" />
      </div>

      <div className="submit-button__container">
        <button id="submit-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
