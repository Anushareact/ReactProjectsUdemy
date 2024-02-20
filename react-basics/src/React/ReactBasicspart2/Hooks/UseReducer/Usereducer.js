import React from "react";
import { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type == "ADD") {
    
    return {count:state.count+1}
  }
  if (action.type == "RESET") {
    
    return { count:0};
  }
  if (action.type == "SUB") {
    
    return { count: state.count - 1 };
  }
  return state;
};

const Usereducer = () => {
  const init ={count:0}
  const [state, dispatch] = useReducer(reducer, init);
  const Reset = () => {
    
    dispatch({
      type: "RESET"
      
    });
  };
  const Increment = () => {

    dispatch({
      type: "ADD",
    });
  };
  const Decrement = () => {
   
    dispatch({
      type: "SUB",
    });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={Increment}>Add</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>SUB</button>
    </>
  );
};

export default Usereducer;
