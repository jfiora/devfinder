import React from "react";
import Search from "../search/search";
import User from "../user/user";

const Content = () => {
  const [user, setUser] = React.useState({
    name: "The Octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    bio: null,
    login: "octocat",
    location: "San Francisco",
    html_url: "https://github.com/octocat",
    twitter_username: null,
    company: "@github",
    public_repos: 8,
    created_at: "2011-01-25T18:44:36Z",
    followers: 4205,
    following: 9,
    blog: "https://github.blog",
  });

  React.useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <div className="content">
      <Search sendDataToParent={setUser} />
      <User user={user} />
    </div>
  );
};

export default Content;
