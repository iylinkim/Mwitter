import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import "styles/home.css";

const Home = ({ userObj, darkMode }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);
  return (
    <div className="container">
      <NweetFactory userObj={userObj} darkMode={darkMode}/>
      <ul className="nweets">
        {nweets.map((nweet) => {
          return (
            <Nweet
              key={nweet.id}
              isOwner={nweet.creatorId === userObj.uid}
              nweetObj={nweet}
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
