import React from 'react'

const Props = (props) => {
  return (
    // <div>Props is a feature in react that allows us to send informations between components</div>
    //Setting default props:there are two types.
    <>
      <div style={{border:"2px grey solid ",padding:"5px",margin:"5px",width:"30%",borderRadius:"10px",display:"inline-block"}}>
        {/* //second type by using or we can set the default props */}
        <h3>Name:{props.name || "react"}</h3>
        <h3>Role:{props.role || "react developer"}</h3>
      </div>
    </>
  );
}
//1st type of setting default props
// Props.defaultProps={
//     name:"DefaultName",
//     role:"DeafultRole"
// }
export default Props