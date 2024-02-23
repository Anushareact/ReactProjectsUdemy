import React, { useState, useRef, useEffect } from "react";
import styles from "./TaskManager.module.css";
import useLocalStorage from "use-local-storage"
import Task from "./Task";
const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  // const [tasks, setTasks] = useState([]);
  //storing our tasj into local storage
    const [tasks, setTasks] =useLocalStorage("tasks",[]);
  //Editing step2 creating a 2 states
  const [taskID,setTaskID]=useState(null)
    const [isEditing, setIsEditing] = useState(false);

  const nameInputRef = useRef(null);
  useEffect(() => {
    nameInputRef.current.focus();
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    if((!name && !date) || (!name || !date)){
        alert("please fill the Task details")
    }
    //editing step4: cheking the fileds or empty or not
    //map thorough the tasks to update the task values by using setTasks state
    else if(name && date &&isEditing){
     setTasks(
       tasks.map((task) => {
         if (task.id === taskID) {
           return { ...task,name,date,complete:false };
         }
         return task
       })
     ); 
//editing step5
//make form feilds empty and set isedting to false and taskId to null
setName("")
setDate("")
setIsEditing(false)
setTaskID("")
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

// Editing step1 and also send this function as prop to child component i.e is task.js
  const EditTask=(id)=>{
    //editing step3:first we need to fine the task thats need to be edit.(in the list of array of objects)
    //so that first we need to get the task id that was clicked
    //after that find that id and details  in the array of objects by using find menthod(in this case array of objects is tasks)
    //after display/push  the values into the form
    console.log(id);
    //find id in the list of objects
    const thisTask=tasks.find((task)=>task.id===id)
    //set the id to taskid and make isediting state to true
    setIsEditing(true);
     setTaskID(id); 
     //push tha values to form that the user clicked on the task
     setName(thisTask.name)
     setDate(thisTask.date)


  }
  //Deleting the task
  const DeleteTask=(id)=>{
    console.log(id);
    //logic for deleting the task
    if(window.confirm("are you sure")===true){
 const newTasks = tasks.filter((task) => task.id !== id);
 setTasks(newTasks);
    }
   

  } 
  //function for completing the task
  const CompleteTask=(id)=>{
    console.log(id);
    setTasks(tasks.map((task)=>{
      if(task.id === id){
        return {...task,complete:true}
      }
      return task



    }))


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
          {/* editing step 6:change the edit and save task text according to the isedting */}
          <button className={styles.button}>{isEditing?"Edit Task":"SaveTask"}</button>
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
            return (
              <Task
                {...task}
                EditTask={EditTask}
                DeleteTask={DeleteTask}
                CompleteTask={CompleteTask}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskManager;
