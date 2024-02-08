import React from 'react'
import Profile from './Profile'
import profile1 from "../../../../assets/profile1.png";
import profile2 from "../../../../assets/profile2.png";
import profile3 from "../../../../assets/profile3.png";

import styles from "./ProfileList.module.css"
import {profiles} from "../../../../Profile-data.js";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
          {
            profiles.map((profile,index)=>{
              const {img,job,name,link,company}=profile
              return (
                <Profile
                key={index}
                  image={img}
                  job={job}
                  name={name}
                  company={company}
                  link={link}
                />
              );



            })
          }
          {/* <Profile
            image={profile1}
            job={"developer"}
            name={"Anusha Mutharasi"}
            company={"Microsoft"}
            link={"#"}
          />
          <Profile
            image={profile2}
            job={"developer"}
            name={"Anusha Mutharasi"}
            company={"Microsoft"}
            link={"#"}
          />
          <Profile
            image={profile3}
            job={"developer"}
            name={"Anusha Mutharasi"}
            company={"Microsoft"}
            link={"#"}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ProfileList