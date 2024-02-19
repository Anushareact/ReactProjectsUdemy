import React, { useState } from "react";
import "./Styles.css"
const Logicalaandoperator = ({bool}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(bool);
  console.log(!isLoggedIn)
  return (
    <div>
      Logicalaandoperator
      {isLoggedIn && <h1 className="--text-color">Welcome,Logical And Opeartor</h1>}
      {!isLoggedIn && <h1 className="--text-color">Welcome,guest</h1>}
    </div>
  );
};

export default Logicalaandoperator;
