import React from "react";

import "./PublicHeader.css";

const PublicHeader: React.FC = (props) => {
  return <header className="public-layout__header">{props.children}</header>;
};

export default PublicHeader;
