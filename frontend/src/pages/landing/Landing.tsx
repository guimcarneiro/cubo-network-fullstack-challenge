import React, { useEffect, ReactNode } from "react";

import "./Landing.css";
import { PersonForm, PersonTable } from "../../components";
import { PERSONSMock } from "../../utils";

interface LandingPageProps {
  customHeader: (component: ReactNode) => void;
}

const Landing: React.FC<LandingPageProps> = (props) => {
  const { customHeader } = props;

  useEffect(() => {
    customHeader(<PersonForm />);
  }, [customHeader]);

  return (
    <div className="landing-page">
      <div className="container-1">
        <PersonTable data={PERSONSMock} />
      </div>
      <div className="container-2">Graphics</div>
    </div>
  );
};

export default Landing;
