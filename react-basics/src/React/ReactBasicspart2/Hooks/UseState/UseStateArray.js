import React, { useState } from "react";
import { profiles } from "../../../../Profile-data.js";
import styles from "./UsestateArray.module.css";
const UseStateArray = () => {
  const [Profiles, setProfiles] = useState(profiles);
  const HandleClearAll = () => {
    setProfiles([]);
  };
  const HandleDelete = (id) => {
    console.log(id);
    const remove_person=Profiles.filter((person)=>person.id!=id);
    console.log(remove_person);
    setProfiles(remove_person);
  };
  return (
    <div className={styles.container}>
      <h1>Persons List</h1>

      {Profiles.map((profile) => {
        const { name, job, company, id } = profile;
        return (
          <div className={styles.smallCard} key={id}>
            <h3>Name:{name}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Job:{job}</p>
              <span>Company:{company}</span>
              <button
                className={styles.button}
                onClick={()=>HandleDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <button className={styles.button} onClick={HandleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
