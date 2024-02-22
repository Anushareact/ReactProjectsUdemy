import React,{useState} from "react";
import { MdDelete } from "react-icons/md";
import "./profile.css";
import { profiles } from "../../../../../src/Profile-data";
const Profile = () => {
  const [userProfile,setuserProfie]=useState(profiles);
  const removeuser=(id)=>{
    console.log(id);
    const newuserlist=userProfile.filter((profile)=>profile.id != id)
    setuserProfie(newuserlist)

  }
  return (
    <section className="section">
      <h1>User Profile App</h1>
      {userProfile.map((profile) => {
        const { id, name, img, job } = profile;
        return (
          <div className="card" key={id}>
            <img src={img} alt="image" />
            <div className="profile">
              <h4>Name:{name}</h4>
              <p>Job:{job}</p>
            </div>
            <MdDelete className="icon" size={30}  onClick={()=>removeuser(id)} />
          </div>
        );
      })}
      <button onClick={()=>setuserProfie([])} className="button">clear all</button>
    </section>
    

  );
};

export default Profile;
