import React from "react";
import styles from "./ProfileList.module.css";
import Profile from "./Profile";
import { profiles } from "../../data";

const ProfileList = () => {
  return (
    <div className={styles.center}>
      <div>
        <h1>Team members</h1>
        <div className={styles.profile_container}>
          {profiles.map((profile, i) => {
             return (
              <Profile key={i}
              image={profile.image}
              name={profile.name}
              job={profile.job}
              company={profile.company}
              link={profile.link}
              />
             )
          })
          }
          {/* <Profile
            name={"Elon Musk"}
            image={elon}
            job={"Entrepreneur"}
            company={"SpaceX"}
            link={"https://twitter.com/elonmusk"}
          />
          <Profile
            name={"Cz Binance"}
            image={cz}
            job={"Entrepreneur"}
            company={"Binance"}
            link={"https://twitter.com/cz_binance?s=20"}
          />
          <Profile
            name={"Jack Ma"}
            image={jackma}
            job={"Entrepreneur"}
            company={"Alibaba"}
            link={"https://twitter.com/JackMa?s=20"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
