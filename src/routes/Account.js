import Post from "components/Post";
import User from "components/User";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import 'styles/account.css';

const Account = () => {
  const history = useHistory();
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    if (!history.location.state) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    const getUserPost = async () => {
      if (history.location.state) {
        const data = await dbService
          .collection("nweets")
          .where("creatorId", "==", history.location.state.userId)
          .orderBy("createdAt")
          .get();

        data.docs.forEach((post) =>
          setUserPost((prev) => [...prev, post.data()])
        );
      }
    };
    getUserPost();
  }, [history.location.state]);

  return (
    <div className="account_wrap">
      <User />
      <ul className="user_posts">
        {userPost.map((post_item) => {
          return <Post key={post_item.createdAt} post_item={post_item} />;
        })}
      </ul>
    </div>
  );
};

export default Account;
