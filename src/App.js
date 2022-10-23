import { useState } from "react";

import Header from "./components/Header/Header";
import UserData from "./components/UserData/UserData";

const App = () => {
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  return (
    <div>
      <Header setIsUserDataLoaded={setIsUserDataLoaded} />
      <UserData isUserDataLoaded={isUserDataLoaded} />
    </div>
  );
};

export default App;
