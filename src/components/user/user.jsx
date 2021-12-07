import React from "react";
import "./user.css";

const User = ({ user }) => {
  function formatDate() {
    let date = new Date(user.created_at);
    let splittedDate = date.toDateString().split(" ");

    return splittedDate[2] + " " + splittedDate[1] + " " + splittedDate[3];
  }

  return (
    <div className="user__card">
      <div className="user__avatar">
        <img src={user.avatar_url} alt="user avatar" />
      </div>
      <div className="user__profile">
        <div className="user__info">
          <h1 className="user__name">{user.name}</h1>
          <h2 className="user__joined">Joined {formatDate()}</h2>
        </div>
        <div className="user__bio">
          <a href={"https://github.com/" + user.login}>@{user.login}</a>
          <p>{user.bio != null ? user.bio : "This profile has no bio"}</p>
        </div>
        <div className="user__stats">
          <div className="user__stat">
            <h2>Repos</h2>
            <span>{user.public_repos}</span>
          </div>
          <div className="user__stat">
            <h2>Followers</h2>
            <span>{user.followers}</span>
          </div>
          <div className="user__stat">
            <h2>Following</h2>
            <span>{user.following}</span>
          </div>
        </div>
        <div className="user__links"></div>
      </div>
    </div>
  );
};

export default User;
