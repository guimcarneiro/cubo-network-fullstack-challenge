import React, { ReactNode } from "react";
import { PublicLayout } from "./layouts";
import { Landing } from "./pages";

import "./App.css";

const App: React.FC = () => {

  const [headerContent, setHeaderContent] = React.useState<ReactNode>(null);

  const innerHeaderContentCallback = (component: ReactNode) => {
    setHeaderContent(component);
  }

  return (
    <div className="App">
      <PublicLayout innerHeader={ headerContent }>
        <Landing customHeader={ innerHeaderContentCallback } />
      </PublicLayout>
    </div>
  );
};

export default App;
