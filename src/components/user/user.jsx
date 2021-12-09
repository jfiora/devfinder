import React from "react";
import "./user.css";
import StatItem from "../statItem/statItem";
import locationIcon from "../../images/icon-location.svg";
import linkIcon from "../../images/icon-website.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import companyIcon from "../../images/icon-company.svg";

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
          <a href={user.html_url}>@{user.login}</a>
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
        <div className="user__links">
          <StatItem img={locationIcon} value={user.location} />
          <StatItem img={twitterIcon} value={user.twitter_username} />
          <StatItem img={linkIcon} value={user.blog} />
          <StatItem img={companyIcon} value={user.company} />
        </div>
      </div>
    </div>
  );
};

export default User;
