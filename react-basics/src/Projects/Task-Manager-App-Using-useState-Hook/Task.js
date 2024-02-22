import React from "react";
import styles from "./TaskManager.module.css";
import {FaCheckDouble,FaEdit,FaTrashAlt} from "react-icons/fa"
const Task = ({id,name,date,complete,EditTask}) => {
  return (
    <div key={id} className={complete ? `${styles.taskcard} ${styles.complete}`: styles.taskcard}>
      <span>
        <p>
          <b>Task:</b>
          {name}
        </p>
        <p>
          <b>Date:</b>
          {date}
        </p>
      </span>
      <span>
        {/* //editing step1 */}
        <button className={styles["icon-styles"]} onClick={()=>EditTask(id)}>
          <FaEdit color="green" />
        </button>
        <button className={styles["icon-styles"]}>
          <FaTrashAlt color="red" />
        </button>
        <button className={styles["icon-styles"]}>
          <FaCheckDouble color="purple" />
        </button>
      </span>
    </div>
  );
};

export default Task;
