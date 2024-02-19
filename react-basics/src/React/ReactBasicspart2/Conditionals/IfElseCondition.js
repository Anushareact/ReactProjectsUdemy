import React,{useState} from 'react'
import  "./Styles.css"

const IfElseCondition = ({bool}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(bool);
    let message;
    if(isLoggedIn){
        message="welcome ,Anusha";
    }
    else{
        message="welcome ,Guest";
    }
  return (
    <div>IfElseConditionee
        <h1 className="--text-color">{message}</h1>

    </div>
  )
}

export default IfElseCondition