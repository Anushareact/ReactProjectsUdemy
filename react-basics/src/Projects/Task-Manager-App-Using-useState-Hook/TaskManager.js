import React, { useState, useRef, useEffect } from "react";
import styles from "./TaskManager.module.css";
import Task from "./Task";
const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const nameInputRef = useRef(null);
  useEffect(() => {
    nameInputRef.current.focus();
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    if(!name && !date || !name || !date){
        alert("please fill the Task details")
    }
    else{
         const newTask = {
           id: Date.now(),
           name,
           date,
           complete: false,
         };
         console.log(newTask);
         setTasks([...tasks, newTask]);
         setName("");
         setDate("");
              
    }
    
   
  };


  const EditTask=(id)=>{
    console.log(id);

  }
  return (
    <div className={styles.container}>
      <h1 className={styles.titile}>TaskManager</h1>
      <div className={styles.card}>
        <form
          onSubmit={HandleSubmit}
          action=""
          className={styles["form-Container"]}
        >
          <div>
            <label htmlFor="name">Task:</label>
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              className={styles.inputs}
              placeholder="Task Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="name">Date:</label>
            <input
              type="date"
              name="date"
              className={styles.inputs}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className={styles.button}>SaveTask</button>
        </form>
      </div>
      {/* Displaying Tasks */}
      <h1 className={styles.titile}>Task List</h1>
      <hr></hr>
      {tasks.length === 0 ? (
        <h3 className={styles.titile}>No tasks Added...</h3>
      ) : (
        <>
          {tasks.map((task) => {
            return <Task {...task}  EditTask={EditTask}/>;
          })}
        </>
      )}
    </div>
  );
};

export default TaskManager;
