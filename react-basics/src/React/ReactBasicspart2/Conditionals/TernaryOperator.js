import React,{useState} from 'react'
import  "./Styles.css"

const TernaryOperator = ({bool}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(bool);
    const LoggedInUser=()=>{
      setIsLoggedIn(!isLoggedIn)

    }

  return (
    <>
      //conditionally adding css class
      <div className={isLoggedIn ? "user" : "guest"}>
        TernaryOperator
        {isLoggedIn ? (
          <h1 className={isLoggedIn ? "user" : "guest"}>
            Welcome Ternary operatoe
          </h1>
        ) : (
          <h1 className={isLoggedIn ? "user" : "guest"}>welcome gguest</h1>
        )}
      </div>
      <button onClick={LoggedInUser}>{isLoggedIn?"LogOut":"Login"}</button>
    </>
  );
}

export default TernaryOperator