import React, { useState } from "react"; 




const UseState = () => {
    const [text,setText]=useState("anusha")
    console.log(text);
    const HandleClick=()=>{
        setText("Happy day ")
    }
  return (
    <>
       <h1>{text}</h1>
      <button onClick={HandleClick}>change</button>
      
    </>
  );
}

export default UseState

