import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleSubstarct = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleAdd = () => {
    setCount((count) => count + 1);
  };
  //setting a color based on the incrementation and decrementation
let color ="black"
if(count<1){
  color="red"
}else if(count>1){
  color="green"
}
else{
  color="black"
}

  return (
    <>
      <div>CounterApp</div>
      <div>
        <h1 style={{ color:color }}>{count}</h1>
        <button onClick={handleSubstarct}>Substarct</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
};

export default CounterApp;
