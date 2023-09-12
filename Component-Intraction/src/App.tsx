import React, { useState } from "react";

import "./App.css";
import Navbar from "./Layouts/NavBar";
import ParentComponent from "./Components/Basics/ParentComponent";
import ChildComponent from "./Components/Basics/ChildComponent";
import ParentCard from "./Components/Intermediate/Parent";
import UserManager from "./Components/Advance/Components/UserManager";

const App = () => {
  const [head, setHead] = useState<string>("Component Intration");
  return (
    <>
      <Navbar heading={head} color='bg-success' />

      {/* <ParentComponent /> */}
      {/* <ParentCard /> */}
      <UserManager />
    </>
  );
};

export default App;
