import React from 'react'
import Button from './Button';
import Card from './Card';
//props destructuring
const Props = ({name,role}) => {
  return (
    // <div>Props is a feature in react that allows us to send informations between components</div>
    //Setting default props:there are two types.
    <>
      <Card >
        <div>
          {/* //second type by using or we can set the default props */}
          <h3>Name:{name}</h3>
          <h3>Role:{role}</h3>
          <Button>learing react</Button>
        </div>
      </Card>
    </>
  );
}
//1st type of setting default props
Props.defaultProps={
    name:"DefaultName",
    role:"DeafultRole"
}
export default Props