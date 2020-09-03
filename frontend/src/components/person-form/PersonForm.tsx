import React from "react";

import { Person } from "../../models/person.model";

import "./PersonForm.css";

interface PersonFormProps {
  onSubmitForm: (firstName: string, lastName: string, amount: number) => void;
}

const PersonForm: React.FC<PersonFormProps> = (props) => {

  const { onSubmitForm } = props;

  const [personFormObject, setPersonFormObject] = React.useState<Person>();

  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>();
  const [submitButtonEnabled, setSubmitButtonEnabled] = React.useState<boolean>(true);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();

    //onSubmitForm(enteredFirstName, enteredLastName, enteredAmount);
  }

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
  }

  const resetFormField = (input: React.RefObject<HTMLInputElement>) => {
    input.current!.value = "";
  }

  const validateForm = (firstName: string, lastName: string, amount: number) => {
    if(!firstName || !lastName || amount <= 0){
      return false;
    }
    return true;
  }

  return (
    <form className="person-form" onSubmit={submitFormHandler}>
      <div className="inputs__container">
        <input name="firstName" type="text" onChange={onInputChangeHandler} placeholder="First Name"/>
        <input name="lastName" type="text" onChange={onInputChangeHandler} placeholder="Last Name"/>
        <input name="amount" type="number" onChange={onInputChangeHandler} placeholder="Amount"/>
      </div>

      <div className="submit-button__container">
        <button id="submit-button" type="submit" disabled={!submitButtonEnabled}>
          Send
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
