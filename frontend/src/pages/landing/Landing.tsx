import React, { useEffect, ReactNode } from "react";

import "./Landing.css";
import { PersonForm, PersonTable } from "../../components";
import { generateId } from "../../utils";
import { Person } from "../../models/person.model";

interface LandingPageProps {
  customHeader: (component: ReactNode) => void;
}

const Landing: React.FC<LandingPageProps> = (props) => {
  const { customHeader } = props;

  const [data, setData] = React.useState<Person[]>([]);

  useEffect(() => {
    customHeader(<PersonForm onSubmitForm={addPersonHandler}/>);
  }, []);

  const addPersonHandler = (firstName: string, lastName: string, amount: number) => {
    let newPerson = {
      id: generateId(),
      firstName,
      lastName,
      amount
    }

    setData(prevData => [...prevData, newPerson]);
  }

  return (
    <div className="landing-page">
      <div className="container-1">
        <PersonTable data={data} />
      </div>
      <div className="container-2">Graphics</div>
    </div>
  );
};

export default Landing;
