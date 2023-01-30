import React from "react";
import styles from "./Profile.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Card from "../cards/Card";

const Profile = ({image, name, job, company, link}) => {
  return (
    <Card>
    <div className={styles.profile}>
      <img src={image} alt="elon musk pic" />
      <div className={styles.profile_content}>
        <h3>My Profile</h3>
        <div className={styles.text}>
          <p>Name:</p>
          <p>{name}</p>
        </div>
        <div className={styles.text}>
          <p>Job:</p>
          <p>{job}</p>
        </div>
        <div className={styles.text}>
          <p>Company:</p>
          <p>{company}</p>
        </div>
        <div className={styles.icons}>
          <a href="https://twitter.com/elonmusk" target="_blank" rel="noreferrer">
          <AiOutlineTwitter  />
          </a>
          <a href="https://twitter.com/elonmusk" target="_blank" rel="noreferrer">
          <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/company/tesla-motors/" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin />
          </a>
        </div>
        <div className={styles.btn}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default Profile;
