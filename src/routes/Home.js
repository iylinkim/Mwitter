import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Mweet from "components/Mweet";
import MweetFactory from "components/MweetFactory";
import "styles/home.css";

const Home = ({ userObj, darkMode }) => {
  const [mweets, setMweets] = useState([]);

  useEffect(() => {
    dbService.collection("mweets").onSnapshot((snapshot) => {
      const mweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMweets(mweetArray);
    });
  }, []);
  return (
    <div className="container">
      <MweetFactory userObj={userObj} darkMode={darkMode} />
      <ul className="mweets">
        {mweets.map((mweet) => {
          return (
            <Mweet
              key={mweet.id}
              isOwner={mweet.creatorId === userObj.uid}
              mweetObj={mweet}
              userObj={userObj}
              darkMode={darkMode}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
