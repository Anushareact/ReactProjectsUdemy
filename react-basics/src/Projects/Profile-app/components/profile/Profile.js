import React from "react";
import Card from "../UI/Card";
import styles from "./Profile.module.css";
import profile1 from "../../../../assets/profile1.png";
import { IconContext } from "react-icons";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";
const Profile = ({image,name,job,company,link}) => {
  return (
    <Card>
      <div className={styles.profile}>
        <img src={image} alt="oh no"></img>
        <div className={styles["profile-container"]}>
          <h3>My Profile</h3>

          <div className={styles.text}>
            <p>Name</p> <p>{name}</p>
          </div>
          <div className={styles.text}>
            <p>Job</p> <p>{job}</p>
          </div>
          <div className={styles.text}>
            <p>Company</p>
            <p>{company}</p>
          </div>
          <IconContext.Provider value={{ size: "30", color: "#666" }}>
            <div className={styles.icons}>
              <AiOutlineTwitter />
              <AiOutlineGithub />
              <AiOutlineGooglePlus />
            </div>
          </IconContext.Provider>

          <div className={styles.viewprofilebtn}>
            <a href={link} target="_blank">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
