import React from 'react'

const Button = ({children}) => {
    console.log(children);
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export default Button