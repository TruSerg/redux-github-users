import { useState } from "react";

import Header from "./components/Header/Header";
import UserData from "./components/UserData/UserData";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);

  return (
    <div>
      <Header />
      <UserData
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        reposPerPage={reposPerPage}
      />
    </div>
  );
};

export default App;
