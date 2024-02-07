import React from 'react'

const Card = ({children}) => {
    console.log(children);
  return (
    <div
      style={{
        border: "2px grey solid ",
        padding: "5px",
        margin: "5px",
        width: "30%",
        borderRadius: "10px",
        display: "inline-block",
      }}
    >
     {children}
    </div>
  );
}

export default Card