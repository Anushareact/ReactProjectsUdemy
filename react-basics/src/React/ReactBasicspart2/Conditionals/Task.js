import React,{useState} from 'react'
import "./Styles.css"
const Task = ({bool,name}) => {
    const [isCompleted,setIscompleted]=useState(bool)
  return (
    <div>
      {isCompleted ? (
        <del>
          <li className="Completed">{name}✔ </li>
        </del>
      ) : (
        <li>{name}</li>
      )}
    </div>
  );
}

export default Task