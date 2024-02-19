import React from 'react'
import Task from './Task';
const Conditionalswithprops = () => {
  return (
    <>
      <div>Conditionalswithprops(Tasks Lists(parent))</div>
      <ul>
        <Task name="HTML" bool={true} />
        <Task name="CSS" bool={true} />
        <Task  name="REACT" bool={false} />
        <Task name ="JS" bool={true} />
      </ul>
    </>
  );
}

export default Conditionalswithprops