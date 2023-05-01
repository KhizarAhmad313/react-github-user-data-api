import React from "react";
import "./Card.css";

const Card = ({ userName, avatar, url }) => {
  return (
    <>
      <div className="profile-card">
        <img src={avatar} alt="avatar" className="profile-pic" />

        <h2 className="userName">{userName}</h2>

        <a href={url} className="button" target="_blank" rel="noreferrer">
          Profile Link
        </a>
      </div>
    </>
  );
};

export default Card;
