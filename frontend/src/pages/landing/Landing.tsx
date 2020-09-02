import React, { useEffect, ReactNode } from "react";

import "./Landing.css";
import { PersonForm } from "../../components";

interface LandingPageProps {
  customHeader: (component: ReactNode) => void;
}

const Landing: React.FC<LandingPageProps> = (props) => {
  useEffect(() => {
    props.customHeader(<PersonForm />);
  }, []);

  return <div className="landing-page">Content</div>;
};

export default Landing;
