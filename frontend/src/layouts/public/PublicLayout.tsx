import React, { ReactNode, useEffect } from "react";

import PublicHeader from "./components/header/PublicHeader";

import "./PublicLayout.css";

interface PublicLayoutProps {
  innerHeader?: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = (props) => {

  return (
    <div className="public-layout">
      <PublicHeader>{props.innerHeader}</PublicHeader>

      <div className="content">{props.children}</div>
    </div>
  );
};

export default PublicLayout;
