import React from 'react'
import Props from './Props'
import IfElseCondition from './Conditionals/IfElseCondition';
import Logicalaandoperator from './Conditionals/Logicalaandoperator';
import TernaryOperator from './Conditionals/TernaryOperator';
import Conditionalswithprops from './Conditionals/Conditionalswithprops';
import Usereducer from './Hooks/UseReducer/Usereducer';

const ImportReactBasicspart2 = () => {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>List of Users</h1>
      <Props name={"Anusha"} role={"developer"} />
      <Props name={"Anusha"} role={"developer"} />
      <Props  /> */}
      {/* <IfElseCondition bool={false} />
      <Logicalaandoperator bool={true} />
      <TernaryOperator bool={false} /> */}
      {/* <Conditionalswithprops/> */}
      <Usereducer/>
    </div>
  );
}

export default ImportReactBasicspart2
