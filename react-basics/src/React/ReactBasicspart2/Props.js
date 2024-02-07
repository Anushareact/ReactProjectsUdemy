import React from 'react'

const Props = (props) => {
  return (
    // <div>Props is a feature in react that allows us to send informations between components</div>
    <>
      <div style={{border:"2px grey solid ",padding:"5px",margin:"5px",width:"30%",borderRadius:"10px",display:"inline-block"}}>
        <h3>Name:{props.name}</h3>
        <h3>Role:{props.role}</h3>
      </div>
    </>
  );
}

export default Props